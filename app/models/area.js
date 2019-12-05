module.exports = (sequelize, DataTypes) => {
  const Area = sequelize.define('area', {
    nome: DataTypes.STRING,
    descricao: DataTypes.STRING,
  }, {
    underscored: true,
  });
  Area.associate = (models) => {
    const { curso } = models;
    Area.hasMany(curso);


    // associations can be defined here
  };
  return Area;
};
