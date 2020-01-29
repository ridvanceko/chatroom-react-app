const passport = require("passport");
const LocalStrategy = require("./localStrategy");
// const GoogleStratgey = require('./googleStrategy')
const User = require("../../models").User;

passport.serializeUser((user, done) => {
  done(null, { id: user.id });
});

passport.deserializeUser((id, done) => {
  User.findOne({ where: { id: id } }).then(res => {
    done(null, res);
  });
});

// ==== Register Strategies ====
passport.use(LocalStrategy);
// passport.use(GoogleStratgey)

module.exports = passport;
