const siteservice = require('./siteService');
const db = require('../../config/firebase')
const userModel = require('../../model/User')
class SiteController {
    // [GET]: /
    async index(req, res, next) {
        const data = await db.collection('USER').get()
        var h = []
        data.forEach((doc) => {
            h.push(new userModel(doc.id,doc.data()));
        //    console.log(doc.id, '=>', doc.data());
          })
      
        var dat = {
            name :'lệ quyên'
        }
        var n = await db.collection('USER').where("name", "==", " lệ quyên 1").get() ;
       // await n.save()
        if (n.empty) {
        console.log('No matching documents.');
        } 
        console.log(n) 
        var p
        n.forEach(doc => {
        console.log(doc.id, '=>', doc.data());
        p = new userModel(doc.id, doc.data())
        });
        res.send(p)
    }

}
module.exports = new SiteController