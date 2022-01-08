const Handlebars = require('handlebars');
const AES = require('../AES')

module.exports = {
    srcImg : (src,k) => {
        var aes = new AES();
        src = aes.Decrypt(k,src)
        // var base64String = Buffer.from(src, 'hex').toString('base64')
        // return src.toString('base64')
        return src
        // return base64String
    }
}