function fibonacci(a: number): void {
  var a1: number = 1;
  var a2: number = 1;
  var a3: number = a1 + a2;
  console.log(a1);
  console.log(a2);
  while (a3 <= a) {
    console.log(a3);
    a1 = a2;
    a2 = a3;
    a3 = a1 + a2;
  }
}
var num: number = 21;
fibonacci(num);
