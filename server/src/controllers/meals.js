const { mealsByCategoryQuery, mealsByRestaurantQuery } = require('../queries');
const { HttpError } = require('../utils');

const getMealsByCategory = async (req, res, next) => {
  const { page, items } = req.query;
  const { id } = req.params;
  try {
    if (page <= 0)
      throw new HttpError(
        400,
        'Pagination Error, Please contact development team for help'
      );
    const data = await mealsByCategoryQuery(page, items, id);
    res.json(data);
  } catch (err) {
    next(err);
  }
};

const getMealsByRestaurant = async (req, res, next) => {
  const { page, items } = req.query;
  const { id } = req.params;
  try {
    if (page <= 0)
      throw new HttpError(
        400,
        'Pagination Error, Please contact development team for help'
      );
    const data = await mealsByRestaurantQuery(page, items, id);
    res.json(data);
  } catch (err) {
    next(err);
  }
};

module.exports = { getMealsByCategory, getMealsByRestaurant };
