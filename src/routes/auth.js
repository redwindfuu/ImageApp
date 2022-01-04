const express = require('express');
const router = express.Router();
const authcontroller = require('../app/auth/authController')
const passport = require('../config/auth/passport');

/* GET users listing. */
router.post('/login',  passport.authenticate('local',{failureRedirect: '/auth/login?invalidlogin=true',}), authcontroller.postlogin);
router.get('/login', authcontroller.login);
router.post('/register', authcontroller.postregister);
router.get('/register', authcontroller.register);
module.exports = router;
