const pool = require('../models/database');

exports.createUser = (req, res) => {
    const { username, password } = req.body;
    pool.query('INSERT INTO users (username, password) VALUES ($1, $2)', [username, password], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(201).send(`User added`);
    });
};
