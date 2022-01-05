const db = require("../../config/firebase")
const imgmodel = require("../../model/Image")
const RSA = require("../../config/RSA")

exports.upload = async (req) => {
    // Xử lý mờ ảnh, mã hoá ảnh
    console.log(req.file.buffer) // unit8
    // unit8 to bitmap
    // https://stackoverflow.com/questions/12710001/how-to-convert-uint8-array-to-base64-encoded-string
    //
    //
    //
    var data = {
        originalname : req.file.originalname,
        buffer: req.file.buffer,// thay thanh buff_encode
        pub: 0,
        pri:0,
        n:0,
    }
    var img = new imgmodel('',data)
    await img.save()

}