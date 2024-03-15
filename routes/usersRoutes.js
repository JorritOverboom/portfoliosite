
const express = require('express');
const usersRoutes = express.Router();
const { createUser } = require('../controllers/usersController');
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

usersRoutes.post('/signup', createUser);


module.exports = usersRoutes;