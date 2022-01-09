const db = require('../../config/firebase')
const pbkdf2 = require('pbkdf2');
const aesjs = require('aes-js')
const { v4: uuidv4 } = require('uuid');
const { BundleBuilder } = require('firebase-admin/firestore');
const AES = require("../../config/AES")
const RSA = require("../../config/RSA")
const userModel = require('../../model/User')
exports.list = async (myid) => {
    var list = [];
    var user = new userModel(myid,'')
    await user.get()
    var lst = user.get_gallery().gallery;
    for(const i of lst) {
        var img = await db.collection("IMAGE").doc(i.id).get();
        if(img.exists){
            list.push({
                key:img.data().key,
                buffer:img.data().buffer,
                id:img.id
            });
        }
    }
    return list;
}

exports.listUser = async (myid) => {
    var listUser = [];
    var list = await db.collection("USER").get();
    list.forEach((doc) => {
        if (doc.id != myid) {
            listUser.push({id: doc.id, name: doc.data().name, user: doc.data().user })
        }
    })
    return listUser;
}