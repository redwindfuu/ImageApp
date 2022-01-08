const Handlebars = require('handlebars');
const AES = require('../AES')

module.exports = {
    srcImg : (src,k) => {
        var aes = new AES();
        src = aes.Decrypt(k,src)
        return src.toString('base64')
    }
}