const RouterSite = require('./sites')
const RouterAuth = require('./auth')

function route(app) {
    app.use('/auth', RouterAuth)
    app.use('/', RouterSite)
}

module.exports = route