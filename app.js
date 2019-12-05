const express = require('express');
const handlebars = require('express-handlebars');
const logger = require('morgan');
const sass = require('node-sass-middleware');
const path = require('path');
const cookieParser = require('cookie-parser');
const csrf = require('csurf');

const router = require('./config/routes');
// const { about } = require('./utils/constants');

const app = express();
const port = 4567;

app.use(express.urlencoded({ extended: false }));

app.use(logger('short'));

// middlewares
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
  helpers: require('./config/handlebars-helpers'),
}));

app.set('view engine', 'handlebars');
app.set('views', `${__dirname}/app/views`);

app.use(router);

app.use(cookieParser());
app.use(csrf({ cookie: true }));

app.get('/cookie', function (req, res) {
  if (!('nome' in req.cookies)) {
  res.cookie('nome', 'valor');
  res.send('Você NUNCA passou por aqui!');
  } else {
  res.send('Você JÁ passou por aqui');
  }
 });
// app.use(function (req, res, next) {
//   if (user.checkAuth(req)) {
//     next();
//   } else {
//     res.statusCode = 403;
//     res.end("Not authorized.");
//   }
// });

// app.use(function(req, res) {
//   res.end('Dados secretos: {código,156234}');
//  });


// rotas
// app.get('/', (_req, res) => {
//   res.render('index', about);
// });
// app.get('/sobre', (_req, res) => {
//   res.end('Bem-vindo à página sobre!');
// });

// middleware not found
// app.use(function (_req, res) {
//   res.statusCode = 404;
//   res.end('404!');
// });

app.listen(port, () => {
  console.log(`Express app iniciada na porta ${port}.`);
});
