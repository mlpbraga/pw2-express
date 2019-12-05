'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('mensagems', [
    {
      partida_id: 1,
      user_id: 1,
      mensagem: 'oloko bicho',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      partida_id: 1,
      user_id: 2,
      mensagem: 'essa fera',
      created_at: new Date(),
      updated_at: new Date(),
    },
  ], {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('mensagems', {}, {}),
};
