const RouterSite = require('./sites')
const RouterAuth = require('./auth')
const RouterImage = require('./image')
function route(app) {

    app.use('/image', RouterImage)
    app.use('/auth', RouterAuth)
    app.use('/', RouterSite)
}

module.exports = route