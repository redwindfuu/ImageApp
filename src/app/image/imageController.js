const imageservice = require("./imageService");
const db = require("../../config/firebase");
const userModel = require("../../model/User");
const e = require("express");
const RSA = require("../../config/RSA");
class ImageController {
  // [POST] : image/:id/upload
  async upload(req, res, next) {
    try {
      //ở đây dùng thuật toán
      await imageservice.upload(req)
      res.redirect('back')
    } catch (error) {
      next(error);
    }
  }
  //[POST] : image/:id/share/
  async share(req, res, next) {
    try {
      await imageservice.share(req)
      res.redirect('back')
    } catch (error) {
      next(error);
    }
  }
}
module.exports = new ImageController();
