const multer = require('multer');

module.exports = multer({
  storage: multer.memoryStorage({}),
  fileFilter: (req, file, cb) => {
    // filFilter nó sẽ kiểm soát việc file nào nên tải lên và file nào không
    if (!file.mimetype.match(/jpe|jpeg|png|gif$i/)) {
      // Nếu không đúng loại file ảnh thì sẽ không cho upload file và ngược lại
      cb(new Error('File is not supported'), false);
      return;
    }
    cb(null, true);
  },
});
