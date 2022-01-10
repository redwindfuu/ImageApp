function autocomplete(inp, arr) {
    var currentFocus;
    inp.addEventListener("input", function (e) {
        var a, b, i, val = this.value;
        closeAllLists();
        if (!val) { return false; }
        currentFocus = -1;
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        this.parentNode.appendChild(a);
        for (i = 0; i < arr.length; i++) {
            var string = arr[i].toUpperCase();
            var key = val.toUpperCase();
            var keyword = string.indexOf(key);

            if (keyword != -1) {
                b = document.createElement("DIV");
                b.innerHTML = arr[i].substr(0, keyword);
                b.innerHTML += "<strong>" + arr[i].substr(keyword, val.length) + "</strong>";
                b.innerHTML += arr[i].substr(val.length + keyword);
                b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                b.addEventListener("click", function (e) {
                    inp.value = this.getElementsByTagName("input")[0].value;
                    closeAllLists();
                });
                a.appendChild(b);
            }
        }
    });
    inp.addEventListener("keydown", function (e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
            currentFocus++;
            addActive(x);
        } else if (e.keyCode == 38) {
            currentFocus--;
            addActive(x);
        } else if (e.keyCode == 13) {
            e.preventDefault();
            if (currentFocus > -1) {
                if (x) x[currentFocus].click();
            }
        }
    });
    function addActive(x) {
        if (!x) return false;
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
        }
    }
    function closeAllLists(elmnt) {
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
}

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
        this.e = Arbitrary_Int_e(this.euler - 1);
        this.d = extend_euclid(this.e, this.euler)
        this.m = this.Encryto_E(private_pass,this.e,this.n);
        // for (let i = 0; i < private_pass.length; i++) {
        //     let t = powMod(private_pass.charCodeAt(i),this.e,this.n);
        //     this.m += t; 
        // }
        return {m: this.m, pub: this.e, pri: this.d, n: this.n };
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
function Arbitrary_Int_e(phi){
    e = Math.floor(Math.random() * (phi - 1)) + 1;
    if(parseInt(gcd(e, phi)) == 1){
        return e;
    }
    return Arbitrary_Int_e(phi);
}

function gcd(a, b){
    while (b){
	t = a;
	a = b;
        b = t%b;
    }
    return a;
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