const router = require('express').Router();
const MealsRouter = require('./meals');
const categoryRouter = require('./categories');

router.use('/meals', MealsRouter);

router.use('/category', categoryRouter);
module.exports = router;
