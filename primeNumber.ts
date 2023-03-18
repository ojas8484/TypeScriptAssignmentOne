
function chkPrime(a: number) {
  if (a > 1) {
    for (let i = 2; i <= a; i++) {
      if (a % i === 0) {
        console.log("Not a prime number");
        return false;
      }
      else{
        console.log("Is a prime Number");
        return true;
      } 
    }
  }
}
var num: number = 2;
chkPrime(num);
