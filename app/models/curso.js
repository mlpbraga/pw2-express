'use strict';
module.exports = (sequelize, DataTypes) => {
  const Curso = sequelize.define('curso', {
    sigla: {
      type: DataTypes.STRING,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [5, 40],
          msg: 'O nome precisa ter entre 5 e 40 caracteres.',
        },
      },
    },
    descricao: {
      type: DataTypes.TEXT,
    },
    id_area: {
      type: DataTypes.INTEGER,
    },
  }, {
    underscored: true,
  });
  Curso.associate = (models) => {
    // associations can be defined here
  };
  return Curso;
};
