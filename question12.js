// palindrome Number

let num=require("readline-sync");
var user=num.questionInt("Enter the number : ");
var num1=user;
var rev=0;
while (user>0){
    dig=user%10
    user=user/10
    rev=rev*10+dig
if (num===rev){
    console.log("The number is palindrome",num)
}else{
    console.log("The number is not palindrome",num)
}
}