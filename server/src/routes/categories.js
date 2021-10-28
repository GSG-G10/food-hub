const router = require('express').Router();
const { getCategories } = require('../controllers');

router.get('/', getCategories);
module.exports = router;
