'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('cursos', [
    {
      sigla: 'CC',
      nome: 'Ciência da Computação',
      descricao: 'Curso de Ciência da Computação da UFAM',
      area_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      sigla: 'EC',
      nome: 'Engenharia da Computação',
      descricao: 'Curso de Engenharia da Computação da UFAM',
      area_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      sigla: 'ES',
      nome: 'Engenharia de Software',
      descricao: 'Curso de Engenharia de Software da UFAM',
      area_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
    },
  ], {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('cursos', {}, {}),
};
