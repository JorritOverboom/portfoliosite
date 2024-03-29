
const pool = require('../models/database');
const bcrypt = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');
const { addDefaultTasks } = require('./tasksController');

const checkIfValidInput = ({ username, password }) => {
    const usernameAllLetters = /^[a-zA-Z]+$/.test(username);
    const usernameHasThreeCharacters = username.length >= 3;
    const passwordHasEightCharacters = password.length >= 8;
    const passwordHasOneCapitalLetter = /[A-Z]/.test(password);
    const passwordHasOneNumber = /\d/.test(password);
    const passwordHasOneSymbol = /[!@#$%^&*]/.test(password);

    return (
        usernameAllLetters &&
        usernameHasThreeCharacters &&
        passwordHasEightCharacters &&
        passwordHasOneCapitalLetter &&
        passwordHasOneNumber &&
        passwordHasOneSymbol
    );
};

exports.createUser = async (req, res) => {
    const { username, password } = req.body;

    if (!checkIfValidInput({ username, password })) {
        return res.status(400).json({ message: 'Invalid username or password' });
    }

    const id = uuidv4();
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    try {
        await pool.query('INSERT INTO users (id, username, password) VALUES ($1, $2, $3)', [id, username, hashedPassword]);

        await addDefaultTasks(id);

        return res.status(201).json({ message: 'User added successfully' });
    } catch (error) {
        if (error.code === '23505') {
            return res.status(409).json({ message: 'Username already exists' });
        };
        return res.status(500).json({ message: 'Error adding user' });
    }
};

exports.findByUsername = (username, cb) => {
    pool.query('SELECT * FROM users WHERE username = $1', [username], (error, results) => {
        if (error) {
            return cb(error);
        }
        if (results.rows.length === 0) {
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