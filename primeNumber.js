function chkPrime(a) {
    if (a > 1) {
        for (var i = 2; i <= a; i++) {
            if (a % i === 0) {
                console.log("Not a prime number");
                return false;
            }
            else {
                console.log("Is a prime Number");
                return true;
            }
        }
    }
}
var num = 2;
chkPrime(num);
