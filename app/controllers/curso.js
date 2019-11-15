/* eslint-disable camelcase */
const models = require('../models/index');

const Curso = models.curso;

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
  if (req.route.methods.get) {
    res.render('curso/create');
  } else {
    try {
      await Curso.create(req.body);
    } catch (e) {
      console.log(e);
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
