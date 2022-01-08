const AES = require("../../config/AES")
const db = require("../../config/firebase")

async function getImageList(userID) {
    var aes = new AES()
    var imageList = []
    var list = await db.collection("IMAGE").get()
    for (i in list.docs){
        var doc = list.docs[i]
        var owners = doc.data().iduser
        if (!owners.includes(userID)){
            continue
        }

        var key = doc.data().key
        var image = doc.data().image
        image = aes.Decrypt(key, image)
        imageList.push(image)
    }

    return imageList
}