const { Meal, Category } = require('../models');

const singleCategoryQuery = async (page, numberOfItems, categoryName) => {
  try {
    const count = await Meal.count();
    const categoryId = await Category.findAll({
      where: { name: categoryName },
    });
    const items = await Meal.findAll({
      offset: (page - 1) * numberOfItems,
      limit: numberOfItems,
      where: { categoryId: categoryId[0].dataValues.id },
    });
    return { count, items };
  } catch (err) {
    // console.log(err);
    return err;
  }
};

module.exports = { singleCategoryQuery };
