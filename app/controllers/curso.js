/* eslint-disable camelcase */
const models = require('../models/index');

const Curso = models.curso;
const Area = models.area;

const index = async (req, res) => {
  const conteudo = 'Página principal da aplicação';
  const cursos = await Curso.findAll();
  if (req.route.methods.get) {
    res.render('curso/index', {
      conteudo,
      cursos,
    });
  }
};
const read = async (req, res) => {
  const { id } = req.params;
  const curso = await Curso.findByPk(
    id,
    {
      include: { model: Area },
    },
  );
  res.render('curso/read', {
    curso,
    // csrf,
  });
};
const create = async (req, res) => {
  // const csrf = req.csrfToken();
  const areas = await Area.findAll();
  if (req.route.methods.get) {
    res.render('curso/create', {
      // csrf,
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
const update = async (req, res) => {
  const { id } = req.params;
  const areas = await Area.findAll();
  const curso = await Curso.findByPk(id);

  if (req.route.methods.get) {
    res.render('curso/update', {
      // csrf,
      areas,
      curso,
    });
  } else {
    try {
      await Curso.update(
        req.body,
        { where: { id } },
      );
      res.redirect('/curso');
    } catch (error) {
      res.render(`curso/update/${curso.id}`, {
        curso: req.body,
        errors: error.errors,
        areas,
      });
    }
  }
};
const remove = async (req, res) => {
  const { id } = req.params;
  if (req.route.methods.get) {
    try {
      await Curso.destroy({ where: { id } });
      res.redirect('/curso');
    } catch (error) {
      const conteudo = 'Página principal da aplicação';
      const cursos = await Curso.findAll();
      res.render('curso/index', {
        conteudo,
        cursos,
        errors: error.errors,
      });
    }
  }
};


module.exports = {
  index,
  create,
  update,
  read,
  remove,
};
