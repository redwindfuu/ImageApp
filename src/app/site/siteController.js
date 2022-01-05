const siteservice = require('./siteService');
const db = require('../../config/firebase')
const userModel = require('../../model/User');
const e = require('express');
class SiteController {
    // [GET]: /
    async index(req, res, next) {
       try {
           if (req.user){
              res.redirect('/gallery') 
           }else{
            res.redirect('/auth/login')
           }
       } catch (error) {
           next(error);
       }  
    }

    async gallery (req, res, next){
        try {
            if(req.user){
                res.render('Gallery/UI')
            }else{
                res.redirect('/')
            }  
        } catch (error) {
            next(error);
        }

    }


}
module.exports = new SiteController