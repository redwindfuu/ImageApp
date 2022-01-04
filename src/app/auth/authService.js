const db = require("../../config/firebase")
const usermodel = require("../../model/User")
const RSA = require("../../config/RSA")
exports.register=async (req) => {
    var ra = new RSA();
    var e = ra.Encryto(req.body.psw)
    var dat = {
            user: req.body.usrname,
            name :req.body.name,
            password :req.body.psw,
            pub: e.pub,
            pri: e.pri,
            n: e.n
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