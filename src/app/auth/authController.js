const authservice = require("./authService");
const db = require("../../config/firebase");
const userModel = require("../../model/User");
class AuthController {
  // [GET]: /auth/register
  async register(req, res, next) {
    try {
      res.render("auth/register")

    } catch (error) {
      next(error);
    }
  }
  // [GET]: /auth/login
  async login(req, res, next) {
    try {
      var err = req.query.erro || 0
      res.render("auth/login",{err});
    } catch (error) {
      next(error);
    }
  }
  // [POST]: /auth/register
  async postregister(req, res, next) {
    try {
      var check = await authservice.register(req);
      res.redirect('/auth/login')
    } catch (error) {
      next(error)
    }
  }

  // [POST]: /auth/login

  async postlogin(req, res, next) {
    try {
      console.log('here')
      if(req.user){
        res.redirect('/gallery')
      }
    } catch (e) {
      next(e);
    }
  }
}
module.exports = new AuthController();
