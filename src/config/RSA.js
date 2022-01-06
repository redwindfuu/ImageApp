class RSA {
    constructor() {
        this.p = 0;
        this.q = 0;
        this.n = 0;
        this.e = 0;
        this.d = 0;
        this.euler = 0;
    }
    Encryto(private_pass) {
        this.p = genPrime();
        this.q = genPrime();
        while (this.p == this.q)
            this.q = genPrime()
        this.n = this.p * this.q;
        this.euler = (this.p - 1) * (this.q - 1);
        this.e = Math.floor(Math.random() * (this.euler - 1)) + 1;
        this.d = extend_euclid(this.e, this.euler)
        this.m = this.Encryto_E(private_pass,this.e,this.n);
        // for (let i = 0; i < private_pass.length; i++) {
        //     let t = powMod(private_pass.charCodeAt(i),this.e,this.n);
        //     this.m += t; 
        // }
        return {m: this.m, pub: this.e, n: this.n };
    }  
    Encryto_E(private_pass,e,n){
        var m ="";
        for (let i = 0; i < private_pass.length; i++) {
            let t = powMod(private_pass.charCodeAt(i),e,n);
            m += t; 
        }
        return m;
    }
};
function powMod(base, pow, mod) {
    var i, result = 1;
    for (i = 0; i < pow; i++) {
        result *= base;
        result %= mod;
    }
    return result;
}
function genPrime() {
    var value = Math.floor(Math.random() * (10000 - 1000)) + 1000;
    prime = isPrime(value)
    while (!prime) {
        value = Math.floor(Math.random() * (10000 - 1000)) + 1000;
        prime = isPrime(value)
    }
    return value
}

function isPrime(value) {
    var flag = true;
    if (value < 2) {
        flag = false;
    }
    else {
        for (var i = 2; i < Math.sqrt(value); i++) {
            if (value % i == 0) {
                flag = false;
                break;
            }
        }
    }

    // Kiểm tra biến flag
    if (flag == true) {
        return true
    }
    else {
        return false
    }
}
function extend_euclid(e, n) {
    var xe = 1;
    var xn = 0;
    var tn = n;

    while (n != 0) {
        var q = (e - e % n) / n;
        var xr = xe - q * xn;

        xe = xn;
        xn = xr;

        var r = e % n;
        e = n;
        n = r;
    }

    if (xe < 0) xe += tn;

    return xe;
}
module.exports = RSA