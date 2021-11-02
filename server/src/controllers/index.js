const {
  getMealsByCategory,
  getMealsByRestaurant,
  getMealById,
} = require('./meals');
const { auth } = require('./auth');
const { getCategories } = require('./categories');
const {
  getRestaurants,
  getRestaurant,
  searchRestaurant,
} = require('./restaurants');
const { createPromoCode } = require('./createPromocode');
const { redeemCode } = require('./redeemCode');

module.exports = {
  auth,
  getMealsByCategory,
  getMealsByRestaurant,
  getCategories,
  getMealById,
  getRestaurants,
  createPromoCode,
  redeemCode,
  getRestaurant,
  searchRestaurant,
};
