const router = require('express').Router();
const categoryRouter = require('./categories');

router.use('/Category', categoryRouter);
module.exports = router;
