function Maximum(a: number, b: number, c: number): void {
  if (a >= b && a >= c) {
    console.log("Maximum number is " + a);
  } else if (b >= a && b >= c) {
    console.log("Maximum number is " + b);
  } else {
    console.log("Maximum number is " + c);
  }
}
var num1: number = 23;
var num2: number = 89;
var num3: number = 6;
Maximum(num1, num2, num3);
