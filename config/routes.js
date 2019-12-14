const express = require('express');
const csrf = require('csurf');
const mainController = require('../app/controllers/main');
const areaController = require('../app/controllers/area');
const cursoController = require('../app/controllers/curso');
const userController = require('../app/controllers/user');
const jogoController = require('../app/controllers/jogo');

const router = express.Router();
const csrfProtection = csrf({ cookie: true });

const checkSession = async (req, res, next) => {
  const session = req.session.uid;
  if (!session) {
    return res.redirect('/login');
  }
  return next();
};

router.get(
  '/',
  mainController.index,
);
router.get(
  '/sobre',
  mainController.sobre,
);
router.get(
  '/login',
  csrfProtection,
  mainController.login,
);
router.post(
  '/login',
  csrfProtection,
  mainController.login,
);
router.get(
  '/signup',
  csrfProtection,
  userController.create,
);
router.post(
  '/signup',
  csrfProtection,
  userController.create,
);
router.get(
  '/logout',
  mainController.logout,
);

router.use(checkSession);
// router.get('/ui', mainController.ui);

// UserController
// router.get('/user', userController.index);
// router.get('/curso/read/:id', cursoController.read);
// router.get('/user/create', userController.create);
// router.get('/curso/update/:id', cursoController.update);
// router.post('/curso/update/:id', cursoController.update);
// router.get('/curso/remove/:id', cursoController.remove);


router.get(
  '/partida',
  csrfProtection,
  jogoController.index,
);

router.get(
  '/ranking',
  mainController.ranking,
);

router.get(
  '/curso',
  csrfProtection,
  cursoController.index,
);
router.get(
  '/curso/read/:id',
  csrfProtection,
  cursoController.read,
);
router.get(
  '/curso/create',
  csrfProtection,
  cursoController.create,
);
router.post(
  '/curso/create',
  csrfProtection,
  cursoController.create,
);
router.get(
  '/curso/update/:id',
  csrfProtection,
  cursoController.update,
);
router.post(
  '/curso/update/:id',
  csrfProtection,
  cursoController.update,
);
router.get(
  '/curso/remove/:id',
  csrfProtection,
  cursoController.remove,
);

router.get('/area', areaController.index);

module.exports = router;
