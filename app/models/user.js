'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING,
    curso_id: DataTypes.INTEGER,
  }, {
    underscored: true,
  });
  User.associate = (models) => {
    const {
      curso,
      mensagem,
      partida,
    } = models;
    User.belongsTo(curso);
    User.hasMany(mensagem);
    User.hasMany(partida);
    // associations can be defined here
  };
  return User;
};