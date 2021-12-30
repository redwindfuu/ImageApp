const express = require('express');
const router = express.Router();
const sitecontroller = require('../app/site/siteController')


/* GET users listing. */
router.get('/', sitecontroller.index);

module.exports = router;
