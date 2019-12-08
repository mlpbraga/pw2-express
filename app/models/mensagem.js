'use strict';
module.exports = (sequelize, DataTypes) => {
  const Mensagem = sequelize.define('mensagem', {
    partida_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    mensagem: DataTypes.STRING,
  }, {
    underscored: true,
  });
  Mensagem.associate = (models) => {
    const {
      user,
      partida,
    } = models;
    Mensagem.belongsTo(user);
    Mensagem.belongsTo(partida);
    // associations can be defined here
  };
  return Mensagem;
};
