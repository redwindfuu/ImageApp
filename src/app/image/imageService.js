const db = require("../../config/firebase")
const imgmodel = require("../../model/Image")
const RSA = require("../../config/RSA")

exports.upload = async (req) => {
    
    var data = {
        originalname : req.file.originalname,
        buffer: req.file.buffer,
        pub: 0,
        pri:0,
        n:0,
    }
    var img = new imgmodel('',data)
    await img.save()

}