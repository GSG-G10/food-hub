const { Category } = require('../models');

const allCategoriesQuery = async (page, numberOfItems) => {
  try {
    const count = await Category.count();
    const items = await Category.findAll({
      offset: (page - 1) * numberOfItems,
      limit: numberOfItems,
    });
    return { count, items };
  } catch (err) {
    return err;
  }
};

module.exports = { allCategoriesQuery };
