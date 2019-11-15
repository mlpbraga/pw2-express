'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Users', [
    {
      nome: 'Maria Luísa Pereira Braga',
      email: 'mlpbraga@gmail.com',
      senha: '123456',
      id_curso: 1,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      nome: 'Ingra Cristina',
      email: 'icmoraes@gmail.com',
      senha: '123456',
      id_curso: 3,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      nome: 'Alezinho Ale Aloi',
      email: 'alealoi@gmail.com',
      senha: '123456',
      id_curso: 1,
      created_at: new Date(),
      updated_at: new Date(),
    },
  ], {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Users', {}, {}),
};
