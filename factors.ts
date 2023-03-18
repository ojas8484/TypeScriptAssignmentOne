function displayFactors(a : number):void{
for (var i=1 ; i<a ;i++){
if (a % i ==0){
    console.log(i);
}
}
}
var num : number =20;
displayFactors(num);