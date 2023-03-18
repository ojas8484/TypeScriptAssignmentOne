function displayFactors(a) {
    for (var i = 1; i < a; i++) {
        if (a % i == 0) {
            console.log(i);
        }
    }
}
var num = 20;
displayFactors(num);
