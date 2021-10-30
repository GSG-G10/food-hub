const { HttpError } = require('../utils');
const { Meal } = require('../models');

const getMealsByCategory = async (req, res, next) => {
  const { page = 1, items = 10 } = req.query;
  const { id } = req.params;
  try {
    if (page <= 0)
      throw new HttpError(
        400,
        'Pagination Error, Please contact development team for help'
      );

    const [count, data] = await Promise.all([
      Meal.count({ where: { categoryId: id } }),
      Meal.findAll({
        offset: (page - 1) * items,
        limit: items,
        where: { categoryId: id },
      }),
    ]);

    res.json({ count, data });
  } catch (err) {
    next(err);
  }
};

const getMealsByRestaurant = async (req, res, next) => {
  const { page = 1, items = 10 } = req.query;
  const { id } = req.params;
  try {
    if (page <= 0)
      throw new HttpError(
        400,
        'Pagination Error, Please contact development team for help'
      );

    const [count, data] = await Promise.all([
      Meal.count({ where: { restaurantId: id } }),
      Meal.findAll({
        offset: (page - 1) * items,
        limit: items,
        where: { restaurantId: id },
      }),
    ]);

    res.json({ count, data });
  } catch (err) {
    next(err);
  }
};

const getMealById = async (req, res, next) => {
  const { mealid } = req.params;
  try {
    const data = await Meal.findAll({
      where: { id: mealid },
    });

    res.json(data);
  } catch (err) {
    next(err);
  }
};

module.exports = { getMealsByCategory, getMealsByRestaurant, getMealById };
