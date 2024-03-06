const pool = require('../models/database');

exports.createToDo= (req, res) => {
    const { task_name, task_description } = req.body;
    pool.query('INSERT INTO todo (task_name, task_description) VALUES ($1, $2)', [task_name, task_description], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(201).send(`Task added`);
    });
};

exports.getToDos = (req, res) => {
    pool.query('SELECT * FROM todo', (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};

exports.getInProgress = (req, res) => {
    pool.query('SELECT * FROM inprogress ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
}; 

exports.getFinished = (req, res) => {
    pool.query('SELECT * FROM finished ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};

exports.deleteToDo = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query('DELETE FROM todo WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).send(`Task deleted`);
    });
};

exports.deleteInProgress = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query('DELETE FROM inprogress WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).send(`Task deleted`);
    });
};

exports.deleteFinished = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query('DELETE FROM finished WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).send(`Task deleted`);
    });
};

exports.moveToDoToInProgress = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query('SELECT * FROM todo WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error;
        }
        const { task_name, task_description } = results.rows[0];
        pool.query('INSERT INTO inprogress (task_name, task_description) VALUES ($1, $2)', [task_name, task_description], (error, results) => {
            if (error) {
                throw error;
            }
            res.status(201).send(`Task moved`);
        });
    });
    pool.query('DELETE FROM todo WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error;
        }
    });
};

exports.moveToDoToFinished = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query('SELECT * FROM todo WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error;
        }
        const { task_name, task_description } = results.rows[0];
        pool.query('INSERT INTO finished (task_name, task_description) VALUES ($1, $2)', [task_name, task_description], (error, results) => {
            if (error) {
                throw error;
            }
            res.status(201).send(`Task moved`);
        });
    });
    pool.query('DELETE FROM todo WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error;
        }
    });
};

exports.moveInProgressToToDo = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query('SELECT * FROM inprogress WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error;
        }
        const { task_name, task_description } = results.rows[0];
        pool.query('INSERT INTO todo (task_name, task_description) VALUES ($1, $2)', [task_name, task_description], (error, results) => {
            if (error) {
                throw error;
            }
            res.status(201).send(`Task moved`);
        });
    });
    pool.query('DELETE FROM inprogress WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error;
        }
    });
};

exports.moveInProgressToFinished = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query('SELECT * FROM inprogress WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error;
        }
        const { task_name, task_description } = results.rows[0];
        pool.query('INSERT INTO finished (task_name, task_description) VALUES ($1, $2)', [task_name, task_description], (error, results) => {
            if (error) {
                throw error;
            }
            res.status(201).send(`Task moved`);
        });
    });
    pool.query('DELETE FROM inprogress WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error;
        }
    });
};

exports.moveFinishedToToDo = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query('SELECT * FROM finished WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error;
        }
        const { task_name, task_description } = results.rows[0];
        pool.query('INSERT INTO todo (task_name, task_description) VALUES ($1, $2)', [task_name, task_description], (error, results) => {
            if (error) {
                throw error;
            }
            res.status(201).send(`Task moved`);
        });
    });
    pool.query('DELETE FROM finished WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error;
        }
    });
};

exports.moveFinishedToInProgress = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query('SELECT * FROM finished WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error;
        }
        const { task_name, task_description } = results.rows[0];
        pool.query('INSERT INTO inprogress (task_name, task_description) VALUES ($1, $2)', [task_name, task_description], (error, results) => {
            if (error) {
                throw error;
            }
            res.status(201).send(`Task moved`);
        });
    });
    pool.query('DELETE FROM finished WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error;
        }
    });
};

