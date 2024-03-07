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

exports.createTask= (req, res) => {
    const { name, description, status } = req.body;
    pool.query('INSERT INTO tasks (name, description, status) VALUES ($1, $2, $3)', [name, description, status], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(201).send(`Task added`);
    });
};

exports.deleteTask = async (req, res) => {
    const id = parseInt(req.params.id);
    try {
        await pool.query('DELETE FROM tasks WHERE id = $1', [id]);
        res.status(200).send(`Task deleted with ID ${id}`);
    } catch (error) {
        return res.status(400).json({
            error
        })
    }
};

exports.updateTaskToToDo = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query('UPDATE tasks SET status = $1 WHERE id = $2', ['todo', id], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).send(`Status of task with ID ${id} updated to todo`);
    });
};

exports.updateTaskToInProgress = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query('UPDATE tasks SET status = $1 WHERE id = $2', ['inprogress', id], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).send(`Status of task with ID ${id} updated to inprogress`);
    });
};

exports.updateTaskToFinished = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query('UPDATE tasks SET status = $1 WHERE id = $2', ['finished', id], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).send(`Status of task with ID ${id} updated to finished`);
    });
};