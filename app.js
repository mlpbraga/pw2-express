/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
const express = require('express');
const handlebars = require('express-handlebars');
const logger = require('morgan');
const sass = require('node-sass-middleware');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const uuid = require('uuid');

const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

// io.on('connection', socket => {
//   console.log('FILHO DE UMA PUTAAAAAA');
// });

const socket = require('./app/controllers/socket')(io);

const port = 4567;

const router = require('./config/routes');

console.log('Aplicando middlewares...');

app.use(express.urlencoded({ extended: false }));
app.use(logger('short'));
app.use(cookieParser());

app.use(sass({
  src: path.join(__dirname, 'public', 'scss'),
  dest: path.join(__dirname, 'public', 'css'),
  debug: true,
  outputStyle: 'compressed',
  prefix: '/css',
  force: true,
}));
app.use('/css', [
  express.static(`${__dirname}/public/css/`),
  express.static(`${__dirname}/node_modules/@chrisoakman/chessboardjs/dist/`),
]);
app.use(
  '/public',
  express.static(path.join(__dirname, 'public', 'css')),
);
app.use('/img', [
  express.static(`${__dirname}/public/img`),
]);
app.use('/js', [
  express.static(`${__dirname}/node_modules/jquery/dist/`),
  express.static(`${__dirname}/node_modules/popper.js/dist/umd/`),
  express.static(`${__dirname}/node_modules/bootstrap/dist/js/`),
  express.static(`${__dirname}/node_modules/@chrisoakman/chessboardjs/dist/`),
  express.static(`${__dirname}/node_modules/chess.js/`),
  express.static(`${__dirname}/public/js`),
]);

app.use(session({
  genid: () => uuid(),
  secret: 'Hi9Cf#mK98',
  resave: true,
  saveUninitialized: true,
}));

app.use((req, res, next) => {
  req.io = app.io;
  next();
});

app.engine(
  'handlebars',
  handlebars({
    // eslint-disable-next-line global-require
    helpers: require(
      './config/handlebars-helpers',
    ),
  }),
);

app.set('view engine', 'handlebars');
app.set('views', `${__dirname}/app/views`);

app.use(router);

// app.listen(port, () => {
//   console.log(`Express app iniciada na porta ${port}.`);
// });

http.listen(port, () => {
  console.log(`Ouvindo a porta ${port}...`);
});
