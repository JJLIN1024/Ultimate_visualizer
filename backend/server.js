const express = require('express');
const app = express();
const cors = require('cors');
const mongo = require('./mongo');
const PORT = process.env.PORT || 5000;
const router = require('./routes/router');
const AuthRouter = require('./routes/AuthRouter');
const passport = require('passport');
const passportSetup = require('./config/passport-setup'); // run setup code
const cookieSession = require('cookie-session');
const keys = require('./config/keys');
const flash = require('connect-flash');

require('dotenv').config();
require('dotenv-defaults').config();

app.use(express.json());
app.use(flash());
app.use(cors());

// cookie
app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000,
  keys: [keys.session.COOKIE_KEYS]
}));

// initialize passport
app.use(passport.initialize());
app.use(passport.session());

app.use('/', router);
app.use('/auth', AuthRouter);

mongo.connect();

app.listen(PORT || 5000, () => {
  console.log(`Server is up on port: ${PORT}`);
});
