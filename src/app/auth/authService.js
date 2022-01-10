const db = require("../../config/firebase")
const usermodel = require("../../model/User")
const RSA = require("../../config/RSA")
exports.register=async (req) => {
    var dat = {
            user: req.body.usrname,
            name :req.body.name,
            password :req.body.psw,
            pub: req.body.pub,
            n: req.body.n
        }
        var user = new usermodel('',dat)
        await user.save();
    return 'oke';
}
exports.checkuserExsit = async (user) => {
   var user2 = new usermodel('',{});
   user2.set({user})
   var h = await user2.checkExist() 
   return h
}