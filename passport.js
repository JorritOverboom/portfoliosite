// pull request example

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const { findByUsername, findById } = require('./controllers/usersController');

// Creating a passport session
passport.use(new LocalStrategy(
    function(username, password, done) {
        findByUsername(username, (err, user) => {
            const userPassword = user.password;
            if (userPassword === undefined) {
                return done(null, false);
            }
            if (err) {
                return done(err);
            }
            if (!user) {
                return done(null, false);
            }
            const matchedPassword = bcrypt.compareSync(password, userPassword);
            if (!matchedPassword) {
                return done(null, false);
            }
            return done(null, user);
        })
    }
));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    findById(id, (err, user) => {
        if (err) {
            return done(err);
        }
        done(null, user);
    })
});