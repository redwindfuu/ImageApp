const aesjs = require('aes-js');
class AES{
    constructor() {
    }

    Encrypt(key, data) {
        var dataBytes = aesjs.utils.utf8.toBytes(data);
        var aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(5));
        var EncryptedBytes = aesCtr.encrypt(dataBytes);
        var EncryptedData = aesjs.utils.hex.fromBytes(EncryptedBytes);
        // var base64String = Buffer.from(EncryptedData, 'hex').toString('base64')
        // return base64String;
        return EncryptedData;
    }

    Decrypt(key, data){
        // var hexString = Buffer.from(data, 'base64').toString('hex')
        var dataBytes = aesjs.utils.hex.toBytes(data);
        var aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(5));
        var DecryptedBytes = aesCtr.decrypt(dataBytes);
        var DecryptedData = aesjs.utils.utf8.fromBytes(DecryptedBytes);
        return DecryptedData;
    }
}
module.exports = AES