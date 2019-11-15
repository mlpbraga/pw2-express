const models = require('../models/index');

const Area = models.area;

const index = async (req, res) => {
  const areas = await Area.findAll();
  res.render('area/index', {
    areas,
  });
};

module.exports = { index };
