/* eslint-disable no-console */
const express = require('express');
const handlebars = require('express-handlebars');
const logger = require('morgan');
const sass = require('node-sass-middleware');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const uuid = require('uuid');

const router = require('./config/routes');
// const { about } = require('./utils/constants');

const app = express();
const port = 4567;

app.use(express.urlencoded({ extended: false }));

app.use(logger('short'));

// middlewares

app.use(cookieParser());

app.use(sass({
  src: path.join(__dirname, 'public', 'scss'),
  dest: path.join(__dirname, 'public', 'css'),
  debug: true,
  outputStyle: 'compressed',
  prefix: '/css',
  force: true,
}));

app.use('/public', express.static(path.join(__dirname, 'public', 'css')));

// eslint-disable-next-line max-len
app.use('/img', [
  express.static(`${__dirname}/public/img`),
]);

app.use('/js', [
  express.static(`${__dirname}/node_modules/jquery/dist/`),
  express.static(`${__dirname}/node_modules/popper.js/dist/umd/`),
  express.static(`${__dirname}/node_modules/bootstrap/dist/js/`),
  express.static(`${__dirname}/public/js`),
]);

app.engine('handlebars', handlebars({
  // eslint-disable-next-line global-require
  helpers: require('./config/handlebars-helpers'),
}));

app.set('view engine', 'handlebars');
app.set('views', `${__dirname}/app/views`);

app.use(session({
  genid: () => uuid(),
  secret: 'Hi9Cf#mK98',
  resave: true,
  saveUninitialized: true,
}));

app.use(router);

app.listen(port, () => {
  console.log(`Express app iniciada na porta ${port}.`);
});
