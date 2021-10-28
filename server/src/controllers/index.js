const { getMealsByCategory, getMealsByRestaurant } = require('./meals');
const { getCategories } = require('./categories');
const { getRestaurants } = require('./restaurants');

module.exports = {
  getMealsByCategory,
  getMealsByRestaurant,
  getCategories,
  getRestaurants,
};
