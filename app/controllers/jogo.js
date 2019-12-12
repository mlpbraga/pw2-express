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
      sessionUid: session ? session.uid : undefined,
      author: user.nome,
      csrf,
    });
  }
};

module.exports = { index };
