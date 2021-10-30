const router = require('express').Router();
const { createPromoCode } = require('../controllers');

router.post('/', createPromoCode);

module.exports = router;
