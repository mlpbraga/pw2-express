module.exports = (sequelize, DataTypes) => {
  const Partida = sequelize.define('partida', {
    user_id_1: {
      type: DataTypes.INTEGER,
      allowNull: true,
      default: null,
    },
    user_id_2: {
      type: DataTypes.INTEGER,
      allowNull: true,
      default: null,
    },
    winner: {
      type: DataTypes.INTEGER,
      allowNull: true,
      default: null,
    },
    fen: DataTypes.STRING,
  }, {
    underscored: true,
  });
  Partida.associate = (models) => {
    const {
      user,
      mensagem,
    } = models;
    Partida.belongsToMany(
      user,
      {
        foreignKey: 'user_id_1',
        through: 'partida_ibfk_1',
      },
    );
    Partida.belongsToMany(
      user,
      {
        foreignKey: 'user_id_2',
        through: 'partida_ibfk_2',
      },
    );
    Partida.belongsToMany(
      user,
      {
        foreignKey: 'winner',
        through: 'partida_ibfk_3',
      },
    );
    Partida.hasMany(mensagem);
    // associations can be defined here
  };
  return Partida;
};
