'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Partidas', [
    {
      id_user_1: 1,
      id_user_2: 2,
      winner: 1,
      fen: 'aaaa',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id_user_1: 1,
      id_user_2: 3,
      winner: 1,
      fen: 'bbbbb',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id_user_1: 2,
      id_user_2: 3,
      winner: 3,
      fen: 'ccccc',
      created_at: new Date(),
      updated_at: new Date(),
    },
  ], {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Partidas', {}, {}),
};
