class RSA {
    constructor(){
        this.p = 0;
        this.q = 0;
        this.n = 0;
        this.e = 0;
        this.d = 0;
    }
    Encryto(private_pass){
        this.p = genPrime();
        this.q = genPrime();
        while( this.p == this.q)
            this.q = genPrime()
        this.n = this.p*this.q;
        this.euler = (this.p-1)*(this.q -1);
        this.e = Math.floor(Math.random() * (this.euler -1)) + 1;
        for(let i =0 ;;i++)
        {
            var t = (i*this.euler +1)/this.e;
            break;
        }
        return {pub:this.e, pri:this.d, n:this.n};
    }
    Decryto(){

    }
};

function genPrime(){
    var value = Math.floor(Math.random() * (100000 - 1000)) + 1000;
    prime = isPrime(value)
    while(!prime){
        value = Math.floor(Math.random() * (100000 - 1000)) + 1000;
        prime = isPrime(value)
    }
    return value
}

function isPrime(value){
    var flag = true;
    if (value < 2){
        flag = false;
    }
    else{
        for (var i = 2; i < Math.sqrt(value); i++)
        {
            if (value % i == 0){
                flag = false;
                break;
            }
        }
    }
 
    // Kiểm tra biến flag
    if (flag == true){
        return true
    }
    else{
        return false
    }
}

module.exports = RSA