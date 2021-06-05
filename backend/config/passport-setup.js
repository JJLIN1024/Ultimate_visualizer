const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');

passport.use(
  new GoogleStrategy({
    clientID: keys.google.GOOGLE_CLINET_ID,
    clientSecret: keys.google.clientSecret,
    callbackURL:'/auth/google/redirect'
  }, ()=>{
    ;
  })
)




