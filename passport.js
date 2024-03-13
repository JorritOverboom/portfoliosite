
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const { findByUsername, findById } = require('./controllers/usersController');

passport.use(new LocalStrategy(
    function(username, password, done) {
        findByUsername(username, (err, user) => {
            const userPassword = user.password;
            if (userPassword === undefined) {
                console.log('new localstrategy has no database user password')
                return done(null, false);
            }
            const matchedPassword = bcrypt.compareSync(password, userPassword);
            if (err) {
                console.log('new localstrategy has an error', err)
                return done(err);
            }
            if (!user) {
                console.log('new localstrategy has no user')
                return done(null, false);
            }
            if (!matchedPassword) {
                console.log('new localstrategy has no matched password')
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