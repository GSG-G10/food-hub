const router = require('express').Router();
const categoryRouter = require('./categories');

router.use('/category', categoryRouter);
module.exports = router;
