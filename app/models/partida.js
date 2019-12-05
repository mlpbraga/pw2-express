'use strict';
module.exports = (sequelize, DataTypes) => {
  const Partida = sequelize.define('partida', {
    user_id_1: DataTypes.INTEGER,
    user_id_2: DataTypes.INTEGER,
    winner: DataTypes.INTEGER,
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
      { through: 'partida_id_player_1_fk' },
    );
    Partida.belongsToMany(
      user,
      { through: 'partida_id_player_2_fk' },
    );
    Partida.hasMany(mensagem);
    // associations can be defined here
  };
  return Partida;
};