const imageservice = require("./imageService");
const e = require("express");
class ImageController {
  // [POST] : image/:id/upload
  async upload(req, res, next) {
    try {
      //ở đây dùng thuật toán
      if(req.user){
        await imageservice.upload(req)
        res.redirect('back')
      }else{
        res.redirect('/')
      }
    } catch (error) {
      next(error);
    }
  }
  //[POST] : image/:id/share/
  async share(req, res, next) {
    try {
      if(req.user){
        await imageservice.share(req)
      res.redirect('back')
      }else{
        res.redirect('/')
      }
    } catch (error) {
      next(error);
    }
  }
}
module.exports = new ImageController();
