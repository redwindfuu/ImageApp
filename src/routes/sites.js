const express = require('express');
const router = express.Router();
const sitecontroller = require('../app/site/siteController')


/* GET users listing. */
router.get('/', sitecontroller.index);
router.get('/gallery', sitecontroller.gallery);
router.get('/api/users', sitecontroller.getUserList);
router.get('/test', sitecontroller.test);

module.exports = router;
