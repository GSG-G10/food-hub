const router = require('express').Router();
const { getMealById } = require('../controllers');

router.get('/:id', getMealById);
module.exports = router;
