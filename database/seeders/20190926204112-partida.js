'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('partidas', [
    {
      user_id_1: 1,
      user_id_2: 2,
      winner: 1,
      fen: 'aaaa',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      user_id_1: 1,
      user_id_2: 3,
      winner: 1,
      fen: 'bbbbb',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      user_id_1: 2,
      user_id_2: 3,
      winner: 3,
      fen: 'ccccc',
      created_at: new Date(),
      updated_at: new Date(),
    },
  ], {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('partidas', {}, {}),
};
