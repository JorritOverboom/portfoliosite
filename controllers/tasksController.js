const pool = require('../models/database');

exports.getToDoTasks = (req, res) => {
    pool.query('SELECT * FROM tasks WHERE status = ($1)', ['todo'], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};

exports.getInProgressTasks = (req, res) => {
    pool.query('SELECT * FROM tasks WHERE status = ($1)', ['inprogress'], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
}; 

exports.getFinishedTasks = (req, res) => {
    pool.query('SELECT * FROM tasks WHERE status = ($1)', ['finished'], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};

exports.createTask = (req, res) => {
    const { id, name, description, status } = req.body;
    pool.query('INSERT INTO tasks (id, name, description, status) VALUES ($1, $2, $3, $4)', [id, name, description, status], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(201).send(`Task added`);
    });
};

exports.deleteTask = (req, res) => {
    const id = req.params.id;
    pool.query('DELETE FROM tasks WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).send(`Task deleted with ID ${id}`);
    });
};

exports.updateTaskToToDo = (req, res) => {
    const id = req.params.id;
    pool.query('UPDATE tasks SET status = $1 WHERE id = $2', ['todo', id], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).send(`Status of task with ID ${id} updated to todo`);
    });
};

exports.updateTaskToInProgress = (req, res) => {
    const id = req.params.id;
    pool.query('UPDATE tasks SET status = $1 WHERE id = $2', ['inprogress', id], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).send(`Status of task with ID ${id} updated to inprogress`);
    });
};

exports.updateTaskToFinished = (req, res) => {
    const id = req.params.id;
    pool.query('UPDATE tasks SET status = $1 WHERE id = $2', ['finished', id], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).send(`Status of task with ID ${id} updated to finished`);
    });
};