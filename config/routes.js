const express = require('express');

const router = express.Router();
const mainController = require('../app/controllers/main');
const areaController = require('../app/controllers/area');
const cursoController = require('../app/controllers/curso');

router.get('/', mainController.index);
router.get('/sobre', mainController.sobre);
// router.get('/ui', mainController.ui);

// CursoController
router.get('/curso', cursoController.index);
router.get('/curso/read/:id', cursoController.read);
router.get('/curso/create', cursoController.create);
router.post('/curso/create', cursoController.create);
router.get('/curso/update/:id', cursoController.update);
router.post('/curso/update/:id', cursoController.update);
router.post('/curso/remove/:id', cursoController.remove);

router.get('/area', areaController.index);

module.exports = router;
