const router = require('express').Router();
const mealsRouter = require('./meals');
const categoryRouter = require('./categories');
const mealRouter = require('./meal');
const restaurantRouter = require('./restaurants');

router.use('/meals', mealsRouter);
router.use('/meal', mealRouter);
router.use('/restaurant', restaurantRouter);
router.use('/category', categoryRouter);

module.exports = router;
