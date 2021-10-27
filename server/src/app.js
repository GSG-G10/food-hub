require('env2')('.env');
const express = require('express');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const { join } = require('path');
const router = require('./routes');

const app = express();

app.use(compression());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.disable('x-powered-by');
app.set('port', process.env.PORT || 8080);

app.use('/api/v1', router);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(join(__dirname, '..', '..', 'client', 'build')));
  app.get('*', (req, res) => {
    res.sendFile(join(__dirname, '..', '..', 'client', 'build', 'index.html'));
  });
}

module.exports = app;
