exports.User = (user)=>{
    this.id = '' || user.id;
    this.password = '' || user.password;
    this.publickey = '' || user.publickey;
    this.privatekey = '' || user.privatekey;
    this.show = function(){
        return {
            id: this.id,
            password: this.password,
            publickey: this.publickey,
        }
    }
}
