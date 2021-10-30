const {
  getMealsByCategory,
  getMealsByRestaurant,
  getMealById,
} = require('./meals');
const { getCategories } = require('./categories');

const { getRestaurants } = require('./restaurants');

module.exports = {
  getMealsByCategory,
  getMealsByRestaurant,
  getCategories,
  getMealById,
  getRestaurants,
};
