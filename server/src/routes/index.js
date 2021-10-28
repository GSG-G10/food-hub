const router = require('express').Router();
const mealsRouter = require('./meals');
const categoryRouter = require('./categories');
const mealRouter = require('./meal');

router.use('/meals', mealsRouter);
router.use('/meal', mealRouter);
router.use('/category', categoryRouter);
module.exports = router;
