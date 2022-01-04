const passport = require('passport'),
  LocalStrategy = require('passport-local').Strategy;

const authservice = require('../../app/auth/authService');
passport.use(
  new LocalStrategy(async function (username, password, done) {
    try {
      var user = await authservice.checkuserExsit(username);

      if (!user) {
        console.log('1')
        return done(null, false, { message: 'Invalid User' });
      }
      var passOk = await validPassword(user, password);
      if (!passOk) {
        console.log('2')
        return done(null, false, { message: 'Invalid Password' });
      }
      console.log(user)
      return done(null, user);
    } catch (e) {
      return done(e);
    }
  }),
);
// check password
async function validPassword(username, password) {
  return password == username.data.password
}
// setting session passport
passport.serializeUser(function (user, done) {
  return done(null, user);
});

passport.deserializeUser(function (user, done) {
  return done(null, user);
});

module.exports = passport;
