const bcrypt = require('bcryptjs');
const models = require('../models/index');

const User = models.user;

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
};
