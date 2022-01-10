const authservice = require("./authService");
const db = require("../../config/firebase");
const userModel = require("../../model/User");
const e = require("express");
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
      if(req.user){
        res.redirect('/gallery')
      }else{
        var err = req.query.err || 0
      res.render("auth/login", {err} );
      }
      
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
      if(req.user){
        res.redirect('/gallery')
      }else{
        res.redirect('/auth/login')
      }
    } catch (e) {
      next(e);
    }
  }
  async logout(req, res, next){
    req.logout();
    res.redirect('/');
  }
}
module.exports = new AuthController();
