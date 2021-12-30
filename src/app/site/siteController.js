const siteservice = require('./siteService');
const db = require('../../config/firebase')

class SiteController {
    // [GET]: /
    async index(req, res, next) {
        const data = await db.collection('USER').doc('NnY9dphakpjm0qIXkeHH').get()
        res.send(data.data())
    }

}
module.exports = new SiteController