const RouterSite = require('./sites')


function route(app) {

    app.use('/', RouterSite)
}

module.exports = route