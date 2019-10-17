const express = require('express');
const debug = require('debug')('app');
const morgan = require('morgan');
const chalk = require('chalk');
const mongoose = require('mongoose');
const config = require('config');

const app = express();
const port = process.env.PORT || '1114';

// connecting to database
mongoose.connect(
  config.get('connections.mongodb'),
  { useNewUrlParser: true, useUnifiedTopology: true },
  err => (err ? debug(err) : debug('connected to database...'))
);

app.get('env') === 'development' && app.use(morgan('dev'));
const User = require('./model/user');
const authRoute = require('./routes/auth')(User);

// middleware
app.use(express.json())
app.use('/api/auth', authRoute);

app.get('/', (req, res) => {
  res.send('welcome to this api');
});

app.listen(port, () => debug(`listening on port ${chalk.red(port)}`));
