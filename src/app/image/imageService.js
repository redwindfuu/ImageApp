const imgmodel = require("../../model/Image")
const AES = require("../../config/AES")
const pbkdf2 = require('pbkdf2');
const { v4: uuidv4 } = require('uuid');
const db = require("../../config/firebase");
const { response, request } = require("express")

exports.upload = async (req) => {
    var k = pbkdf2.pbkdf2Sync(uuidv4(), 'salt', 1, 256 / 8, 'sha512')
    var aes = new AES()
    var encryptedData = aes.Encrypt(k, req.file.buffer)

    var data = {
        buffer: encryptedData,
        key: k,
        iduser: [req.user.id]
    }
    var img = new imgmodel('', data)
    await img.save()

}

exports.share = async (req) => {
    var imageids = req.body.myImg
    var userID = req.body.withUser
    var imageList = await db.collection("IMAGE").get()
    for (i in imageList.docs){
        var doc = imageList.docs[i]
        if (!imageids.includes(doc.id)){
            continue
        }
        var data = doc.data()
        data.iduser.push(userID)
        var obj = await db.collection("IMAGE").doc(doc.id)
        await obj.update(data)
    }
}