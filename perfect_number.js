var user=require("readline-sync")
var n=user.questionInt("Enter The Number : ")
// var i=1
// var s=0
// while (i<=n/2){
//     if (n%i==0 && n%n==0){
//         s+=i
//     }
//     i++
// }
// if (n===s && s!==0){
//     console.log(n,"is perfect number")
// }
// else{
//     console.log(n,"is not perfect number")
// }

var temp = 0;
   for(var i=1;i<=n/2;i++){
      if(n%i === 0){
            temp += i;
      }
} 
   if(temp === n && temp !== 0){
      console.log("It is a perfect number.");
   } 
   else{
         console.log("It is not a perfect number.");
}   