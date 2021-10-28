const { getMealsByCategory, getMealsByRestaurant } = require('./meals');
const { getCategories } = require('./categories');
const { getMealById } = require('./meal');
const { getRestaurants } = require('./restaurants');

module.exports = {
  getMealsByCategory,
  getMealsByRestaurant,
  getCategories,
  getMealById,
  getRestaurants,
};
