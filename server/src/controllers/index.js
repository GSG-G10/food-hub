const { auth } = require('./auth');
const { getMealsByCategory, getMealsByRestaurant } = require('./meals');
const { getCategories } = require('./categories');
const { getRestaurants } = require('./restaurants');
const { createPromoCode } = require('./createPromocode');

module.exports = {
  auth,
  getMealsByCategory,
  getMealsByRestaurant,
  getCategories,
  getRestaurants,
  createPromoCode,
};
