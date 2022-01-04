const express = require('express');
const router = express.Router();
const authcontroller = require('../app/auth/authController')
const passport = require('../config/auth/passport');

/* GET users listing. */
router.post('/login',  passport.authenticate('local',{failureRedirect: '/login?invalidlogin=true',}), authcontroller.login);
router.get('/login', authcontroller.login);

module.exports = router;
