
// Routing for users
const express = require('express');
const usersRoutes = express.Router();
const passport = require('passport');
const { validationResult } = require('express-validator');
const { body } = require('express-validator');
const { createUser } = require('../controllers/usersController');

usersRoutes.get('/logout', (req, res) => {
    req.logout((err) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ message: 'Error logging out' });
        }
    });
    res.redirect('/');
});

// Passport check to see if the user has a session happening
usersRoutes.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, user) => {
        if (err) {
            return next(err);
        }
        if (!user) {
            return res.status(401).json({ ok: false, message: 'Invalid username or password' });
        }
        req.logIn(user, (err) => {
            if (err) {
                return next(err);
            }
            return res.status(200).json({ ok: true, message: 'Logged in successfully' });
        });
    })(req, res, next);
});

// Validating the input of the user that is created
const signUpValidation = [
    body('username').isString().notEmpty().trim(),
    (req, res, next) => {
        const errors = validationResult(req);
        if( !errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

// Route for changes to the database
usersRoutes.post('/signup', signUpValidation, createUser);


module.exports = usersRoutes;