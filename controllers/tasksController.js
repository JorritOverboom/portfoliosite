
const pool = require('../models/database');
const { v4: uuidv4 } = require('uuid');
const xss = require('xss');

exports.getToDoTasks = (req, res) => {
    const user_id = req.user.id;
    pool.query('SELECT * FROM tasks WHERE status = ($1) AND user_id = $2', ['todo', user_id], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};

exports.getInProgressTasks = (req, res) => {
    const user_id = req.user.id;
    pool.query('SELECT * FROM tasks WHERE status = ($1) AND user_id = $2', ['inprogress', user_id], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
}; 

exports.getFinishedTasks = (req, res) => {
    const user_id = req.user.id;
    pool.query('SELECT * FROM tasks WHERE status = ($1) AND user_id = $2', ['finished', user_id], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
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

exports.updateTaskToToDo = (req, res) => {
    const id = req.params.id;
    const user_id = req.user.id;
    pool.query('UPDATE tasks SET status = \'todo\' WHERE id = $1 AND user_id = $2', [id, user_id], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).send(`Status of task with ID ${id} updated to todo`);
    });
};

exports.updateTaskToInProgress = (req, res) => {
    const id = req.params.id;
    const user_id = req.user.id;
    pool.query('UPDATE tasks SET status = \'inprogress\' WHERE id = $1 AND user_id = $2', [id, user_id], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).send(`Status of task with ID ${id} updated to inprogress`);
    });
};

exports.updateTaskToFinished = (req, res) => {
    const id = req.params.id;
    const user_id = req.user.id;
    pool.query('UPDATE tasks SET status = \'finished\' WHERE id = $1 AND user_id = $2', [id, user_id], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).send(`Status of task with ID ${id} updated to finished`);
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
        res.status(201).send(`Task added`);
    });
};

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