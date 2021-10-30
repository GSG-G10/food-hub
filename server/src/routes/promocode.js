const router = require('express').Router();
const { createPromoCode } = require('../controllers');
const { decodeToken } = require('../middleware');

router.post('/promocode', decodeToken, createPromoCode);
