
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const tasksRoutes = require('./routes/tasksRoutes.js');
const usersRoutes = require('./routes/usersRoutes.js');

const app = express();
const port = process.env.SERVER_PORT || 8000;

const session = require('express-session');
const store = new session.MemoryStore();
const passport = require('passport');
require('./passport');

app.use(express.json());
app.use(cors());

app.use(session({
    secret: process.env.SESSION_SECRET,
    cookie: { maxAge: 1000 * 60 * 60 * 24, secure: false},
    resave: false,
    saveUninitialized: false,
    store
}));

app.use(passport.initialize());
app.use(passport.session());

function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
}

app.use('/api/users', usersRoutes);
app.use('/api/tasks', ensureAuthenticated, tasksRoutes);

app.listen(port, () => {
    console.log(`Server is running at https://localhost:${port}`);
});