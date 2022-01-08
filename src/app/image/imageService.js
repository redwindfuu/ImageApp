const imgmodel = require("../../model/Image")
const AES = require("../../config/AES")
const pbkdf2 = require('pbkdf2');
const { v4: uuidv4 } = require('uuid');
const db = require("../../config/firebase");

const usermodel = require("../../model/User");
const { use } = require("passport");
exports.upload = async (req) => {
    var k = pbkdf2.pbkdf2Sync(uuidv4(), 'salt', 1, 256 / 8, 'sha512')
    var aes = new AES()
    var encryptedData = aes.Encrypt(k, req.file.buffer.toString('base64'))

    var data = {
        buffer: encryptedData,
        key: k,
        iduser: [req.user.id]
    }
    var img = new imgmodel('', data)
    await img.save()
    var user = new usermodel(req.user.id , '')
    await user.get()
    await user.add_gallery({
        id : img.id,
        key : img.getValues().key,
    })
    await user.save();

}

exports.share = async (req) => {
    var imageids = req.body.myImg || []
    var userID = req.body.withUser
    var USER = await db.collection("USER").where('user','==',userID).get() 
    var iduser ;
    USER.forEach((doc) => { iduser = doc.id });
    var user = new usermodel(iduser, '')
    await user.get()
    
    for(var i of imageids){
        var img = new imgmodel(i,'');
        await img.get()
        var userListofImg = img.get_iduser();
        if(!userListofImg.includes(iduser)){
            await img.add_iduser(iduser)
        }
        var dat ={
            id : img.id,
            key : img.getValues().key,
        }
        var listImgofUser = user.get_gallery();
        if(!listImgofUser.includes(dat)){
            await user.add_gallery(dat)
            await user.save();
        }
    }

    // for (i in imageList.docs){
    //     var doc = imageList.docs[i]
    //     if (!imageids.includes(doc.id)){
    //         continue
    //     }
    //     var data = doc.data()
    //     data.iduser.push(userID)
    //     var obj = await db.collection("IMAGE").doc(doc.id)
    //     await obj.update(data)
    // }
}