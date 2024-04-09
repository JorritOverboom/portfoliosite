
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
// require('dotenv').config(); // uncomment when in development, comment when live
const tasksRoutes = require('./routes/tasksRoutes.js');
const usersRoutes = require('./routes/usersRoutes.js');

const app = express();
const port = process.env.SERVER_PORT || 8000;

// Creating a session
const session = require('express-session');
const store = new session.MemoryStore();
const passport = require('passport');
require('./passport');

app.use(cors());
app.use(express.json());
app.use(express.static('build'));
app.use(helmet());

app.set('trust proxy', 1);
app.use(session({
    secret: process.env.SESSION_SECRET,
    cookie: { maxAge: 1000 * 60 * 60 * 24, httpOnly: true, secure: true}, // secure: false in development, secure: true when live
    resave: false,
    saveUninitialized: false,
    store
}));

app.use(passport.initialize());
app.use(passport.session());

// Middleware to check whether a user has a session happening
function ensureAuthenticated(req, res, next) {
    console.log(`session authentication is: ${req.isAuthenticated()}`);
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
}

// Redirecting the api request to a specific route
app.use('/api/users', usersRoutes);
app.use('/api/tasks', ensureAuthenticated, tasksRoutes);

app.listen(port, () => {
    console.log(`Server is running at https://localhost:${port}`);
});