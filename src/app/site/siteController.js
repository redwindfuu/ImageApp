const siteservice = require('./siteService');
const db = require('../../config/firebase')
const userModel = require('../../model/User')
class SiteController {
    // [GET]: /
    async index(req, res, next) {
        // const data = await db.collection('USER').get()
        // var h = []
        // data.forEach((doc) => {
        //     h.push(new userModel(doc.id,doc.data()));
        // //    console.log(doc.id, '=>', doc.data());
        //   })
      
        // var dat = {
        //     user: 'KIRA12',
        //     name :'lệ quyên',
        //     password :'phong211',
        //     pub:'46798233',
        //     pri:'214516613',
        //     n:312
        // }
        // var user = new userModel('',dat)
        // await user.save();
        
        res.redirect('/auth/login')
    }

    async gallery (req, res, next){
        try {
            res.render('Gallery/UI')
        } catch (error) {
            next(error);
        }

    }


}
module.exports = new SiteController