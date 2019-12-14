const bcrypt = require('bcryptjs');
const models = require('../models/index');

const { sequelize } = models;

const User = models.user;
const Partida = models.partida;

const index = (req, res) => {
  const { session } = req;
  const conteudo = 'Página principal da aplicação';
  res.render('main/index', {
    conteudo,
    layout: 'main',
    sessionUid: session ? session.uid : undefined,
  });
};
const sobre = (req, res) => {
  const { session } = req;
  const conteudo = 'Página sobre a aplicação';
  res.render('main/sobre', {
    conteudo,
    layout: 'main',
    sessionUid: session ? session.uid : undefined,
  });
};
const login = async (req, res) => {
  const csrf = req.csrfToken();
  if (req.route.methods.get) {
    res.render('main/login', {
      layout: 'main',
      csrf,
    });
  } else {
    try {
      const { email, senha } = req.body;
      const user = await User.findOne({
        where: { email },
      });
      if (bcrypt.compareSync(senha, user.senha)) {
        req.session.uid = user.id;
        res.redirect('/');
      } else {
        res.render('main/login', {
          csrf: req.csrfToken(),
        });
      }
    } catch (erro) {
      res.render('main/login', {
        layout: 'main',
        errors: erro.errors,
        csrf,
      });
    }
  }
};

const ranking = async (req, res) => {
  const { session } = req;
  const partidas = await Partida.findAll({
    attributes: ['winner', [sequelize.fn('count', 'partida.id'), 'winCount']],
    group: ['winner'],
    order: [[sequelize.fn('count', 'partida.id'), 'DESC']],
  });
  const users = await User.findAll({});
  const final = [];

  let count = 1;
  partidas.forEach((winner) => {
    users.forEach((user) => {
      if (winner.winner === user.id) {
        final.push({
          count,
          name: user.nome,
          score: winner.dataValues.winCount,
        });
        count += 1;
      }
    });
  });
  res.render('main/ranking', {
    layout: 'main',
    scores: final,
    sessionUid: session ? session.uid : undefined,
  });
};

const logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return console.log(err);
    }
    return res.redirect('/');
  });
};
module.exports = {
  index,
  sobre,
  login,
  logout,
  ranking,
};
