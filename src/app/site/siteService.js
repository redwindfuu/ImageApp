 const db = require('../../config/firebase')
exports.list = async (myid) => {
    var listUser = [];
    var list = await db.collection("USER").get();
    list.forEach((doc) => {
        if(doc.id != myid){
            listUser.push({id : doc.id, name : doc.data().name , user : doc.data().user})
        }
        
    })
    return listUser;
}