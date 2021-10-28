const router = require('express').Router();
const MealsRouter = require('./meals');

router.use('/meals', MealsRouter);
module.exports = router;
