const express = require('express');
const router = express.Router();
const authcontroller = require('../app/auth/authController')


/* GET users listing. */
router.get('/login', authcontroller.login);
router.post('/login', authcontroller.postlogin);

module.exports = router;
