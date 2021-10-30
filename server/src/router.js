const router = require('express').Router();

const {
  getCategories,
  getMealById,
  getMealsByCategory,
  getMealsByRestaurant,
  getRestaurants,
} = require('./controllers');

router.get('/meals/category/:id', getMealsByCategory);
router.get('/meals/restaurant/:id', getMealsByRestaurant);
router.get('/meals/:mealid', getMealById);
router.get('/restaurant', getRestaurants);
router.get('/category', getCategories);

module.exports = router;
