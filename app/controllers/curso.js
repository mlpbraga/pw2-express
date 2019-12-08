/* eslint-disable camelcase */
const models = require('../models/index');

const Curso = models.curso;
const Area = models.area;

const index = async (req, res) => {
  const csrf = req.csrfToken();
  const cursos = await Curso.findAll();
  const { session } = req;
  if (req.route.methods.get) {
    res.render('curso/index', {
      csrf,
      cursos,
      sessionUid: session ? session.uid : undefined,
    });
  }
};
const read = async (req, res) => {
  const csrf = req.csrfToken();
  const { id } = req.params;
  const { session } = req;
  const curso = await Curso.findByPk(
    id,
    {
      include: { model: Area },
    },
  );
  res.render('curso/read', {
    curso,
    csrf,
    sessionUid: session ? session.uid : undefined,
  });
};
const create = async (req, res) => {
  const csrf = req.csrfToken();
  const { session } = req;
  const areas = await Area.findAll();
  if (req.route.methods.get) {
    res.render('curso/create', {
      csrf,
      areas,
      sessionUid: session ? session.uid : undefined,
    });
  } else {
    try {
      await Curso.create(req.body);
      res.redirect('/curso');
    } catch (error) {
      res.render('curso/create', {
        csrf,
        curso: req.body,
        errors: error.errors,
        areas,
        sessionUid: session ? session.uid : undefined,
      });
    }
  }
};
const update = async (req, res) => {
  const csrf = req.csrfToken();
  const { id } = req.params;
  const { session } = req;
  const areas = await Area.findAll();
  const curso = await Curso.findByPk(id);

  if (req.route.methods.get) {
    res.render('curso/update', {
      csrf,
      areas,
      curso,
      sessionUid: session ? session.uid : undefined,
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
        csrf,
        sessionUid: session ? session.uid : undefined,
      });
    }
  }
};
const remove = async (req, res) => {
  const csrf = req.csrfToken();
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
        csrf,
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
