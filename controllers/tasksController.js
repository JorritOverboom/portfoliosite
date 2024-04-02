// Functions that interact with the database
const pool = require('../models/database');
const { v4: uuidv4 } = require('uuid');
const xss = require('xss');

exports.getTasks = (req, res) => {
    const user_id = req.user.id;
    pool.query('SELECT * FROM tasks WHERE user_id = $1', [user_id], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};

exports.createTask = (req, res) => {
    const { id, name, description } = req.body;
    const user_id = req.user.id;
    const status = 'todo';
    const sanitizedName = xss(name);
    const sanitizedDescription = xss(description);
    pool.query('INSERT INTO tasks (id, name, description, status, user_id) VALUES ($1, $2, $3, $4, $5)', [id, sanitizedName, sanitizedDescription, status, user_id], (error) => {
        if (error) {
            throw error;
        }
        
        res.status(201).send('task added')
    });
};

exports.deleteTask = (req, res) => {
    const id = req.params.id;
    const user_id = req.user.id;
    pool.query('DELETE FROM tasks WHERE id = $1 AND user_id = $2', [id, user_id], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).send(`Task deleted with ID ${id}`);
    });
};

// Moves a task to a different list by updating its status
exports.updateTask = (req, res) => {
    const status = req.body.status;
    const id = req.params.id;
    const user_id = req.user.id;
    pool.query('UPDATE tasks SET status = $1 WHERE id = $2 AND user_id = $3', [status, id, user_id], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).send(`Status of task with ID ${id} updated to ${status}`);
    })
};

// When a new user is created, three default tasks are made for that new user
exports.addDefaultTasks = async (id) => {
    const user_id = id;
    const defaultTasks = [
        {
            id: uuidv4(),
            name: 'This is a to do task',
            description: 'The buttons below allow you to:<br>1) delete this task<br>2) move this task to the in progress list<br>3) move this task to the finished list',
            status: 'todo',
            user_id
        },
        {
            id: uuidv4(),
            name: 'This is an in progress task',
            description: 'The buttons below allow you to:<br>1) delete this task<br>2) move this task to the to do list<br>3) move this task to the finished list',
            status: 'inprogress',
            user_id
        },
        {
            id: uuidv4(),
            name: 'This is a finished task',
            description: 'The buttons below allow you to:<br>1) delete this task<br>2) move this task to the to do list<br>3) move this task to the in progress list',
            status: 'finished',
            user_id
        },
    ];

    await Promise.all(defaultTasks.map(task => {
        return pool.query('INSERT INTO tasks (id, name, description, status, user_id) VALUES ($1, $2, $3, $4, $5)', [task.id, task.name, task.description, task.status, task.user_id]);
    }));
};