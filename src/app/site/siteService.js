const db = require('../../config/firebase')
const pbkdf2 = require('pbkdf2');
const aesjs = require('aes-js')
const { v4: uuidv4 } = require('uuid');
const { BundleBuilder } = require('firebase-admin/firestore');
const AES = require("../../config/AES")
exports.list = async (myid) => {
    var listUser = [];
    var list = await db.collection("USER").get();
    list.forEach((doc) => {
        if (doc.id != myid) {
            listUser.push({id: doc.id, name: doc.data().name, user: doc.data().user })
        }

    })
    return listUser;
}

exports.test2 = async (myid) => {
    // var list = await db.collection("IMAGE").get();
    // for (var i in list.docs)
    // {
    //     var doc = list.docs[i];
    //     var buf = doc.data().buffer;
    //     console.log(buf);
    //     // console.log();
    //     // var key_128 = pbkdf2.pbkdf2Sync('password', 'salt', 1, 128 / 8, 'sha512');
    //     // console.log(key_128);
    //     // var key_128 = pbkdf2.pbkdf2Sync('password', 'salt', 1, 256 / 8, 'sha512');
    //     // console.log(key_128);
    //     var bufstr = buf.toString('base64');
    //     console.log(bufstr)
    //     var buf2 = Buffer.from(bufstr, 'base64');
    //     console.log(buf2)
    //     // var text = 'Text may be any length you wish, no padding is required.';
    //     // var textBytes = aesjs.utils.utf8.toBytes(text);
    //     // console.log(textBytes);
    //     break
    // }
    // var str = "hello world"
    // var strbytes = aesjs.utils.utf8.toBytes(str)
    // var str2 = aesjs.utils.utf8.fromBytes(strbytes)
    // console.log(typeof str2)
    // var buffer = Buffer.from(str)
    // console.log(buffer.toString())
    // console.log(buffer)
    // var bufferstr = buffer.toString("base64")
    // console.log(bufferstr)
    // console.log(bufferstr)
    // var buffer2 = Buffer.from(bufferstr, "base64")
    // console.log(buffer2)
    // var key_256 = pbkdf2.pbkdf2Sync('phungdeptrai', 'salt', 1, 256 / 8, 'sha512')
    // strbytes = aesjs.utils.utf8.toBytes(bufferstr)
    // var aesCtr = new aesjs.ModeOfOperation.ctr(key_256, new aesjs.Counter(5));
    // var encr = aesCtr.encrypt(strbytes);
    // var encrstr = aesjs.utils.utf8.fromBytes(encr);
    // aesCtr = new aesjs.ModeOfOperation.ctr(key_256, new aesjs.Counter(5));
    // var decr = aesCtr.decrypt(encr);
    // tempstr = aesjs.utils.utf8.fromBytes(decr)
    // console.log(tempstr)

    // var list = await db.collection("USER").get()
    // for (i in list.docs){
    //     var doc = list.docs[i]
    //     console.log(doc.data())
    //     var data = doc.data()
    //     data.name = "proplayer"
    //     console.log(data)
    //     var obj = await db.collection("USER").doc(doc.id)
    //     await obj.update(data)
    //     break   
    // }

    var string = "hello world"
    var k = pbkdf2.pbkdf2Sync(uuidv4(), 'salt', 1, 256 / 8, 'sha512')
    var aes = new AES()
    var en = aes.Encrypt(k, string)
    console.log(en)
    var de = aes.Decrypt(k, en)
    console.log(de)

}   