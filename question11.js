// reverce number

// let rev=0;
// let num=123456;
// let lastDigit;
// while(num !=0){
// 	lastDigit=num%10;
//   rev=rev*10+lastDigit;
//   num=Math.floor(num/10);
// }
// console.log("Reverse number : "+rev);



let rev=0;
var a=require("readline-sync")
var num=a.questionInt("Enter The Number : ")
let lastDigit;
while (num!=0){
  lastDigit=num%10;
  rev=rev*10+lastDigit;
  num=Math.floor(num/10);
}
console.log("Reverse Number : "+rev)