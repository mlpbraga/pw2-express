const models = require('../models/index');

const Partida = models.partida;

const index = async (req, res) => {
  const partida = await Partida.findOne({
    where: { id: 1 },
  });
  res.render('main/jogo', {
    partida,
  });
};

module.exports = { index };
