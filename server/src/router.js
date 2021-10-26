const router = require('express').Router();

const { login } = require('./controllers');

// router.post('/login', login);
router.get('/login', login);

module.exports = router;
