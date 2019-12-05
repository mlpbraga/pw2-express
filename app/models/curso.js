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
    area_id: {
      type: DataTypes.INTEGER,
    },
  }, {
    underscored: true,
  });
  Curso.associate = (models) => {
    const {
      area,
      user,
    } = models;
    Curso.belongsTo(area);
    Curso.hasMany(user);
  };
  return Curso;
};
