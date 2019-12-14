const models = require('../models/index');

const Partida = models.partida;
const User = models.user;

const index = async (req, res) => {
  const csrf = req.csrfToken();
  const { session } = req;
  const partida = await Partida.findByPk(1);
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

module.exports = { index };
