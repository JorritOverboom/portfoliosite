
const express = require('express');
const usersRoutes = express.Router();
const { createUser, checkExistingUser } = require('../controllers/usersController');
const { addDefaultTasks } = require('../controllers/tasksController');
const passport = require('passport');


usersRoutes.get('/logout', (req, res) => {
    req.logout((err) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ message: 'Error logging out' });
        }
    });
    res.redirect('/');
});

usersRoutes.get('/login', (req, res) => {
    res.render('login');
});

usersRoutes.get('/profile', (req, res) => {
    if (req.isAuthenticated()) {
        res.render('profile', { user });
    }
});

usersRoutes.get('/checkLoggedIn', (req, res) => {
    if (req.isAuthenticated()) {
        res.json({ loggedIn: true });
    } else {
        res.json({ loggedIn: false });
    }
});

usersRoutes.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            console.log('passport.authenticate has an error', err);
            return next(err);
        }
        if (!user) {
            console.log('passport.authenticate has no user')
            return res.status(401).json({ ok: false, message: 'Invalid username or password' });
        }
        req.logIn(user, (err) => {
            if (err) {
                console.log('passport.authenticate req.logIn has an error', err);
                return next(err);
            }
            return res.status(200).json({ ok: true, message: 'Logged in successfully' });
        });
    })(req, res, next);
});

usersRoutes.post('/checkExistingUser', checkExistingUser);
usersRoutes.post('/createUser', createUser);
usersRoutes.post('/addDefaultTasks', addDefaultTasks);


module.exports = usersRoutes;