function fibonacci(a) {
    var a1 = 1;
    var a2 = 1;
    var a3 = a1 + a2;
    console.log(a1);
    console.log(a2);
    while (a3 <= a) {
        console.log(a3);
        a1 = a2;
        a2 = a3;
        a3 = a1 + a2;
    }
}
var num = 21;
fibonacci(num);
