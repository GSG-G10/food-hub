const { Meal } = require('../models');

const singleCategoryQuery = async (page, numberOfItems, categoryId) => {
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

module.exports = { singleCategoryQuery };
