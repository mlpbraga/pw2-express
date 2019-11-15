

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('partidas', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    id_user_1: {
      type: Sequelize.INTEGER,
    },
    id_user_2: {
      type: Sequelize.INTEGER,
    },
    winner: {
      type: Sequelize.INTEGER,
    },
    fen: {
      type: Sequelize.STRING,
    },
    created_at: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updated_at: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('partidas'),
};
