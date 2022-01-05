const imageservice = require("./imageService");
const db = require("../../config/firebase");
const userModel = require("../../model/User");
const e = require("express");
class ImageController {
  // [POST] : image/:id/upload
  async upload(req, res, next) {
    try {
      //ở đây dùng thuật toán mã hóa
      console.log(req.file)
      res.send(req.file);
    } catch (error) {
      next(error);
    }
  }
  //[POST] : image/:id/share/
  async share(req, res, next) {
    try {
      
      res.send(req.body);
    } catch (error) {
      next(error);
    }
  }
}
module.exports = new ImageController();
