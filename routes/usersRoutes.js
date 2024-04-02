// Routing for users
const express = require('express');
const usersRoutes = express.Router();
const passport = require('passport');
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

// Route for changes to the database
usersRoutes.post('/signup', createUser);


module.exports = usersRoutes;