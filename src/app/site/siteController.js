const siteservice = require('./siteService');
const db = require('../../config/firebase')
const userModel = require('../../model/User');
const e = require('express');
const { response, request } = require('express');
class SiteController {
    // [GET]: /
    async index(req, res, next) {
        try {
            if (req.user) {
                res.redirect('/gallery')
            } else {
                res.redirect('/auth/login')
            }
        } catch (error) {
            next(error);
        }
    }

    async gallery(req, res, next) {
        try {
            if (req.user) {
                // var listUser = await siteservice.list(req.user.id)
                // console.log(listUser)
                res.render('Gallery/UI',{userID: req.user.id})
            } else {
                res.redirect('/')
            }
        } catch (error) {
            next(error);
        }

    }
    async getUserList(req, res, next) {
        try {
            if (req.user) {
                var listUser = await siteservice.list(req.user.id)
                res.status(200).json(listUser)
            } else {
                res.status(404).json({})
            }
        } catch (error) {
            next(error);
        }
    }
    async test(req, res, next) {
        try {
            await siteservice.test2(req)
            res.status(200).json({})
        } catch (error) {
            next(error);
        }
    }

}
module.exports = new SiteController