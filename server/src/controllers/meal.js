const { Meal } = require('../models');

const getMealById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const data = await Meal.findAll({
      where: { id },
    });

    res.json(data);
  } catch (err) {
    next(err);
  }
};

module.exports = { getMealById };
