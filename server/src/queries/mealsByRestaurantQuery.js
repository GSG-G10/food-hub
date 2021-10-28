const { Meal } = require('../models');

const mealsByRestaurantQuery = async (
  page = 1,
  numberOfItems = 10,
  restaurantId
) => {
  try {
    const count = await Meal.count({ where: { restaurantId } });
    const items = await Meal.findAll({
      offset: (page - 1) * numberOfItems,
      limit: numberOfItems,
      where: { restaurantId },
    });
    return { count, items };
  } catch (err) {
    return err;
  }
};

module.exports = mealsByRestaurantQuery;
