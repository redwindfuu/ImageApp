const passport = require('passport'),
  LocalStrategy = require('passport-local').Strategy;

const authservice = require('../../app/auth/authService');

passport.use(
  new LocalStrategy(async function (username, password, done) {
    try {

      if (!user) {
        return done(null, false, { message: 'Invalid User' });
      }
      var passOk = await validPassword(user, password);
      if (!passOk) {
        return done(null, false, { message: 'Invalid Password' });
      }

      return done(null, user);
    } catch (e) {
      return done(e);
    }
  }),
);
// check password
async function validPassword(username, password) {
  return bcrypt.compare(password, username.PASS);
}
// setting session passport
passport.serializeUser(function (user, done) {
  return done(null, user);
});

passport.deserializeUser(function (user, done) {
  return done(null, user);
});

module.exports = passport;
