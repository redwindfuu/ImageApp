const db = require("../config/firebase");
class Image {
  constructor(id, data) {
    this.id = id || "";
    this.data = data || {};
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
  async get() {
    if(this.id){
      var user = await db.collection("IMAGE").doc(this.id).get();
      this.data = user.data();
      if(!this.data.iduser){
        this.data.iduser = []
      }
      return 1;
    }
    return 0;
  }
  set(data){
    
    if(!this.data.buffer){
      this.data.buffer = ''
    }
    if(!this.data.key){
      this.data.key = ''
    }
    if(!this.data.iduser){
      this.data.iduser = []
    }

    this.data.buffer = data.buffer ? data.buffer : this.data.buffer
    this.data.key = data.key ? data.key : this.data.key
    this.data.iduser = data.iduser ? data.iduser : this.data.iduser
  }

  async add_iduser(user){
    this.data.iduser.push(user)
    await this.save()
  } 
  get_iduser(){
    return this.data.iduser
  }
  getValues(){
    return {
        id: this.id,
        buffer : this.data.buffer,
        key : this.data.key,
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
