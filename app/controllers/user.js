/* eslint-disable camelcase */
const bcrypt = require('bcryptjs');
const models = require('../models/index');

const User = models.user;
const Curso = models.curso;


const index = async (req, res) => {
  const users = await User.findAll();
  if (req.route.methods.get) {
    res.render('user/index', {
      users,
    });
  }
  // };
  // const read = async (req, res) => {
  //   const { id } = req.params;
  //   const curso = await Curso.findByPk(
  //     id,
  //     {
  //       include: { model: Area },
  //     },
  //   );
  //   res.render('curso/read', {
  //     curso,
  //     // csrf,
  //   });
};
const create = async (req, res) => {
  const csrf = req.csrfToken();
  const cursos = await Curso.findAll();
  if (req.route.methods.get) {
    res.render('main/signup', {
      csrf,
      cursos,
    });
  } else {
    const errors = [];
    const {
      senha,
      confirmaSenha,
      nome,
      email,
      curso_id,
    } = req.body;
    const { session } = req;
    if (senha && senha === confirmaSenha) {
      await User.create({
        nome,
        email,
        senha: bcrypt.hashSync(senha),
        curso_id,
        sessionUid: session ? session.uid : undefined,
      });
      res.redirect('/');
    } else {
      const error = {};
      error.path = 'confirmaSenha';
      error.message = 'As senhas inseridas não são correspondentes';
      errors.push(error);
    }

    if (errors.length > 0) {
      res.render('main/signup', {
        cursos,
        user: req.body,
        errors,
        csrf,
        sessionUid: session ? session.uid : undefined,
      });
      throw new Error('confirmaSenha');
    }
  }
};
// const update = async (req, res) => {
//   const { id } = req.params;
//   const areas = await Area.findAll();
//   const curso = await Curso.findByPk(id);

//   if (req.route.methods.get) {
//     res.render('curso/update', {
//       // csrf,
//       areas,
//       curso,
//     });
//   } else {
//     try {
//       await Curso.update(
//         req.body,
//         { where: { id } },
//       );
//       res.redirect('/curso');
//     } catch (error) {
//       res.render(`curso/update/${curso.id}`, {
//         curso: req.body,
//         errors: error.errors,
//         areas,
//       });
//     }
//   }
// };
// const remove = async (req, res) => {
//   const { id } = req.params;
//   if (req.route.methods.get) {
//     try {
//       await Curso.destroy({ where: { id } });
//       res.redirect('/curso');
//     } catch (error) {
//       const conteudo = 'Página principal da aplicação';
//       const cursos = await Curso.findAll();
//       res.render('curso/index', {
//         conteudo,
//         cursos,
//         errors: error.errors,
//       });
//     }
//   }
// };


module.exports = {
  index,
  create,
  // update,
  // read,
  // remove,
};
