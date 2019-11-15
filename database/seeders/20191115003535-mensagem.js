'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('mensagems', [
    {
      id_partida: 1,
      id_user: 1,
      mensagem: 'oloko bicho',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id_partida: 1,
      id_user: 2,
      mensagem: 'essa fera',
      created_at: new Date(),
      updated_at: new Date(),
    },
  ], {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('mensagems', {}, {}),
};
