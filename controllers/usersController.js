
const pool = require('../models/database');

exports.checkExistingUser = (req, res) => {
    const { username } = req.body;
    pool.query('SELECT * FROM users WHERE username = $1', [username], (error, results) => {
        if (error) {
            console.log(error);
            res.status(500).json({ message: 'Error checking for existing user' });
        }
        if (results.rows.length > 0) {
            res.status(200).json({ userDoesNotExist: false, message: 'User already exists'});
        } else {
            res.status(404).json({ userDoesNotExist: true, message: 'User does not exist'});
        }
    });
}

exports.createUser = (req, res) => {
    const { id, username, password } = req.body;
    pool.query('INSERT INTO users (id, username, password) VALUES ($1, $2, $3)', [id, username, password], (error, results) => {
        if (error) {
            console.log(error);
            res.status(500).json({ message: 'Error adding user' });
        }
        res.status(201).json({ message: 'User added successfully' })
    });
};

exports.findByUsername = (username, cb) => {
    pool.query('SELECT * FROM users WHERE username = $1', [username], (error, results) => {
        if (error) {
            console.log('findByUsername has an error', error)
            return cb(error);
        }
        if (results.rows.length === 0) {
            console.log('findByUsername has no user')
            return cb(null, false);
        }
        return cb(null, results.rows[0]);
    });
};

exports.findById = (id, cb) => {
    pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
        if (error) {
            return cb(error);
        }
        if (!results.rows[0]) {
            return cb(null, false);
        }
        return cb(null, results.rows[0]);
    });
};