const express = require('express');
const debug = require('debug')('app');
const morgan = require('morgan');
const chalk = require('chalk');

const app = express();
const port = process.env.PORT || '1114';

app.get('env') === 'development' && app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('welcome to this api');
});

app.listen(port, () => debug(`listening on port ${chalk.red(port)}`));
