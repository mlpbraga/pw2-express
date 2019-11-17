module.exports = (sequelize, DataTypes) => {
  const Area = sequelize.define('area', {
    nome: DataTypes.STRING,
    descricao: DataTypes.STRING,
  }, {
    underscored: true,
  });
  Area.associate = function(models) {
    // associations can be defined here
  };
  return Area;
};