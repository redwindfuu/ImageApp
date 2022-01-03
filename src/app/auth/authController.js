const authservice = require("./authService");
const db = require("../../config/firebase");
const userModel = require("../../model/User");
class AuthController {
  // [GET]: /auth/login
  async login(req, res, next) {
    try {
      res.render("auth/login");
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
                res.send("Sucess");
                // Do somethinghere
                //
                //
                // function here
              });
        }
        if (userID == "") {
          res.send("Your username or password are wrong");
        }
      });
    } catch (error) {
      next(error);
    }
  }
}
module.exports = new AuthController();
