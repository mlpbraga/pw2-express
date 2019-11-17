/* eslint-disable camelcase */
const models = require('../models/index');

const Curso = models.curso;
const Area = models.area;

const index = async (req, res) => {
  const conteudo = 'Página principal da aplicação';
  const cursos = await Curso.findAll();
  res.render('curso/index', {
    conteudo,
    cursos,
  });
};
const read = async (req, res) => {
  const cursoId = req.param('id');
  res.end(cursoId);
};
const create = async (req, res) => {
  const areas = await Area.findAll();
  if (req.route.methods.get) {
    res.render('curso/create', {
      areas,
    });
  } else {
    try {
      await Curso.create(req.body);
      res.redirect('/curso');
    } catch (error) {
      res.render('curso/create', {
        curso: req.body,
        errors: error.errors,
        areas,
      });
    }
  }
};
const update = async (req, res) => { };
const remove = async (req, res) => { };


module.exports = {
  index,
  create,
  update,
  read,
  remove,
};
