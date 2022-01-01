const db = require("../config/firebase");
class User {
  constructor(id, data) {
    this.id = id || "";
    this.data = data || {};
  }
  async save() {
    if (!this.id && this.data.user) {
      var check = await db
        .collection("USER")
        .where("user", "==", this.data.user)
        .get();
      if (check.empty) {
        const obj = await db.collection("USER").add(this.data);
        this.id = obj.id
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
    if(!this.data.name){
      this.data.name = ''
    }
    if(!this.data.buffer){
      this.data.buffer = ''
    }
    if(!this.data.pri){
      this.data.pri = ''
    }
    if(!this.data.pub){
      this.data.pub = ''
    }
    if(!this.data.n){
      this.data.n = 0
    }
    if(!this.data.image_gallery){
      this.data.image_gallery = {}
    }
    this.data.name = data.name ? data.name : this.data.name
    this.data.user = data.user ? data.user : this.data.user
    this.data.password = data.password ? data.password : this.data.password
    this.data.pri = data.pri ? data.pri : this.data.pri
    this.data.pub = data.pub ? data.pub : this.data.pub
    this.data.n = data.n ? data.n : this.data.n
    this.image_gallery = data.image_gallery ? data.image_gallery : this.data.image_gallery
  }
  add_image_gallery(data){
      this.data.image_gallery.push(data)
  } 
  get_image_gallery(){
      return this.data.image_gallery
  }
  getPrivate(){
      return {
          pri : this.data.pri,
          password : this.data.password,
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
