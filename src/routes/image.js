const express = require('express');
const router = express.Router();
const imagecontroller = require('../app/image/imageController')
const upload = require('../config/multer')
/* GET users listing. */
router.post('/:id/upload' ,upload.single('image') ,imagecontroller.upload);
router.post('/:id/share' ,imagecontroller.share);

module.exports = router;
