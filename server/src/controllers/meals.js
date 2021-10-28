const { HttpError } = require('../utils');
const { Meal } = require('../models');

const getMealsByCategory = async (req, res, next) => {
  let { page, items } = req.query;
  const { id } = req.params;
  try {
    if (page <= 0)
      throw new HttpError(
        400,
        'Pagination Error, Please contact development team for help'
      );
    page = page || 1;
    items = items || 10;
    const count = await Meal.count({ where: { categoryId: id } });
    const data = await Meal.findAll({
      offset: (page - 1) * items,
      limit: items,
      where: { categoryId: id },
    });
    res.json({ count, data });
  } catch (err) {
    next(err);
  }
};

const getMealsByRestaurant = async (req, res, next) => {
  let { page, items } = req.query;
  const { id } = req.params;
  try {
    if (page <= 0)
      throw new HttpError(
        400,
        'Pagination Error, Please contact development team for help'
      );
    page = page || 1;
    items = items || 10;
    const count = await Meal.count({ where: { restaurantId: id } });
    const data = await Meal.findAll({
      offset: (page - 1) * items,
      limit: items,
      where: { restaurantId: id },
    });
    res.json({ count, data });
  } catch (err) {
    next(err);
  }
};

module.exports = { getMealsByCategory, getMealsByRestaurant };
