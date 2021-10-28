const { Meal } = require('../models');

const mealsByCategoryQuery = async (
  page = 1,
  numberOfItems = 10,
  categoryId
) => {
  try {
    const count = await Meal.count({ where: { categoryId } });
    const items = await Meal.findAll({
      offset: (page - 1) * numberOfItems,
      limit: numberOfItems,
      where: { categoryId },
    });
    return { count, items };
  } catch (err) {
    return err;
  }
};

module.exports = mealsByCategoryQuery;
