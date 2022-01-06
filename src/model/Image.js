const db = require("../config/firebase");
class Image {
  constructor(id, data) {
    this.id = id || "";
    this.data = data || {};
  }
  async get(){
    if(this.data){
      var temp = await db.collection("IMAGE").doc(this.id).get();
      this.data = temp.data()
    }
    return this.data
  }
  async save() {
    if (!this.id) {  
      const obj = await db.collection("IMAGE").add(this.data);
      this.id = obj.id;
      return obj;
    } else {
      const obj = await db.collection("IMAGE").doc(this.id);
      const res = await obj.update(this.data);
      return res;
    }
    return 0;
  }
  set(data){
    
    if(!this.data.originalname){
      this.data.originalname = ''
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
    if(!this.data.iduser){
      this.data.iduser = {}
    }

    this.data.originalname = data.originalname ? data.originalname : this.data.originalname
    this.data.buffer = data.buffer ? data.buffer : this.data.buffer
    this.data.pri = data.pri ? data.pri : this.data.pri
    this.data.pub = data.pub ? data.pub : this.data.pub
    this.data.n = data.n ? data.n : this.data.n
    this.iduser = data.iduser ? data.iduser : this.data.iduser
  }

  add_iduser(data){
    this.data.iduser.push(data)
  } 
  get_iduser(){
    return this.data.iduser
  }

  getPrivate(){
      return {
          pri : this.data.pri,
          n : this.data.n,
      }
  }
  getValues(){
    return {
        id: this.id,
        buffer : this.data.buffer,
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

module.exports = Image;
