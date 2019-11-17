

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('areas', [
    {
      id: 1,
      nome: 'Ciências Exatas',
      descricao: 'Computação, engenharias, matemática, estatística, etc.',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: 2,
      nome: 'Ciências Humanas',
      descricao: 'Letras, psicologia, história, geografia, etc.',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: 3,
      nome: 'Ciências Biológicas',
      descricao: 'Medicina, biologia, odontologia, agrária, etc.',
      created_at: new Date(),
      updated_at: new Date(),
    },
  ], {}),

  down: (
    queryInterface,
    Sequelize,
  ) => queryInterface.bulkDelete('areas', {}, {}),
};
