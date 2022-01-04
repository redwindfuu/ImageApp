const authservice = require("./authService");
const db = require("../../config/firebase");
const userModel = require("../../model/User");
class AuthController {
  // [GET]: /auth/login
  async login(req, res, next) {
    try {
      var err = req.query.erro || 0
      res.render("auth/login",{err});
    } catch (error) {
      next(error);
    }
  }
  // [POST]: /auth/login
  async postlogin(req, res, next) {
    try {
      var docRef = await db
        .collection("USER")
        .where("user", "==", req.body.username)
        .where("password", "==", req.body.password);
      console.log(docRef);
      var userID =""
      await docRef.get().then((querySnapshot) => {
        if(!querySnapshot.empty){
            querySnapshot.forEach((doc) => {
                console.log(doc.id, " => ", doc.data());
                userID = doc.id;
             //   res.send("Sucess");
              //  h = new userModel(doc.id,doc.data())
                res.redirect('/gallery')
              });
        }else{
            res.redirect('/auth/login?erro=1');
        }
      });
    } catch (e) {
      next(e);
    }
  }
}
module.exports = new AuthController();
