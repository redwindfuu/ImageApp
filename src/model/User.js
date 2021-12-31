const db = require("../config/firebase");
class User {
  constructor(id, data) {
    this.id = id || "";
    this.data = data || {};
  }
  async save() {
    if (!this.id) {
      var check = await db
        .collection("USER")
        .where("user", "==", this.data.user)
        .get();
      if (check.empty) {
        const obj = await db.collection("USER").add(this.data);
        return obj;
      }
      return 0;
    } else {
      const obj = await db.collection("USER").doc(this.id);
      const res = await obj.update(this.data);
      return res;
    }
    return 0;
  }
  set(data){
    this.data = data
  }
  getPrivate(){
      return {
          pri : this.data.pri,
          pass : this.data.pass,
          n : this.data.n,
      }
  }
  getValues(){
    return {
        name: this.data.name,
        pub : this.data.pub,
        n : this.data.n,
    }
  }
  printInfo() {
    if (this.id) {
      console.log(this.id, "has value :", this.data);
    } else {
      console.log(" no id and has value :", this.data);
    }
  }
}

module.exports = User;
