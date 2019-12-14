/* eslint-disable camelcase */
const models = require('../models/index');

const Mensagem = models.mensagem;
const User = models.user;
const Partida = models.partida;

// const Partida = models.partida;
// const User = models.user;

// const PartidaController = require('./partida');
// const { senderWithLogin } = require('../../utils');

module.exports = (io) => {
  io.on('connection', (socket) => {
    socket.on('renderChat', async (partida) => {
      const messages = await Mensagem.findAll({
        where: { partida_id: partida },
        order: [['createdAt', 'ASC']],
        include: { model: User },
      });
      socket.emit('previousMessages', messages);
    });

    socket.on('sendMessage', async (data) => {
      const {
        user_id,
        partida_id,
        mensagem,
        createdAt,
      } = data;
      await Mensagem.create({
        partida_id,
        user_id,
        mensagem,
        created_at: createdAt,
        updated_at: new Date(),
      });
      await socket.broadcast.emit('receivedMessage', data);
    });
  });
};
