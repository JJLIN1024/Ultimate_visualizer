const express = require('express');
const app = express();
const cors = require('cors');
const mongo = require('./mongo');
const PORT = process.env.PORT || 5000;
// const router = require('./routes/router');
const AuthRouter = require('./routes/AuthRouter');
const passportSetup = require('./config/passport-setup'); // run setup code

require('dotenv').config();
require('dotenv-defaults').config();

app.use(express.json());
app.use(cors());
// app.use('/', router);
app.use('/auth', AuthRouter);

mongo.connect();

app.listen(PORT || 5000, () => {
  console.log(`Server is up on port: ${PORT}`);
});
