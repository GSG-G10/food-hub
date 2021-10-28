const router = require('express').Router();
const mealsRouter = require('./meals');
const categoryRouter = require('./categories');
const restaurantRouter = require('./restaurants');

router.use('/meals', mealsRouter);
router.use('/restaurant', restaurantRouter);
router.use('/category', categoryRouter);

module.exports = router;
