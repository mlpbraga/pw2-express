

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('areas', [
    {
      id: 1,
      nome: 'Ciências Exatas',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: 2,
      nome: 'Ciências Humanas',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: 3,
      nome: 'Ciências Biológicas',
      created_at: new Date(),
      updated_at: new Date(),
    },
  ], {}),

  down: (
    queryInterface,
    Sequelize,
  ) => queryInterface.bulkDelete('areas', {}, {}),
};
