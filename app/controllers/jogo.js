/* eslint-disable camelcase */
const models = require('../models/index');

const Partida = models.partida;
const User = models.user;

const index = async (req, res) => {
  const csrf = req.csrfToken();
  const { session } = req;
  const { id } = req.params;
  const partida = await Partida.findByPk(id);
  if (session) {
    const user = await User.findByPk(session.uid);
    res.render('main/jogo', {
      partida_id: partida.id,
      jogadorBranco: partida.user_id_1,
      jogadorPreto: partida.user_id_2,
      sessionUid: session ? session.uid : undefined,
      fen: partida.fen,
      author: user.nome,
      jogadorLogado: user.id,
      csrf,
    });
  }
};

const create = async (req, res) => {
  const csrf = req.csrfToken();
  const { session } = req;
  if (session) {
    const user = await User.findByPk(session.uid);
    const partida = await Partida.create({
      user_id_1: user.id,
      user_id_2: null,
      winner: null,
      fen: 'start',
    });
    res.render('main/jogo', {
      partida_id: partida.id,
      jogadorBranco: partida.user_id_1,
      jogadorPreto: partida.user_id_2,
      sessionUid: session ? session.uid : undefined,
      fen: partida.fen,
      author: user.nome,
      jogadorLogado: user.id,
      csrf,
    });
  }
};

const update = async (req, res) => {
  const { session } = req;
  const {
    partida_id,
    user_id_1,
    user_id_2,
    winner,
    fen,
  } = req.body;
  if (session) {
    const partida = await Partida.update(
      {
        user_id_1,
        user_id_2,
        winner,
        fen,
      },
      {
        where: { id: partida_id },
      },
    );
    return partida;
  }
};

module.exports = {
  index,
  create,
};
