// var i=1
// while(i<=100){
//     if (i%3==0){
//         console.log("nav")
//     }else if(i%7==0){
//         console.log("gurukul")
//     }else if (i%3==0 && i%7==0){
//         console.log("navgurukul")
//     }else{
//         console.log(i)
//     }
// }

// var i = 1;
// do{
//     if (i%3==0 && i%7==0){
//         console.log("navgurukul")
//     }else if(i%7==0){
//         console.log("gurukul")
//     }else if (i%3==0){
//         console.log("nav")
//     }else{
//         console.log(i)
//     }
//     i++
// }
// while(i<=100)

// var i=1
// do{
//     if (i%3==0 && i%7==0){
//         console.log(i,"Navgurukul")
//     }else if (i%7==0){
//         console.log(i,"Gurukul")
//     }else if(i%3==0){
//         console.log(i,"Nav")
//     }else{
//         console.log(i)
//     }
//     i++
// }
// while(i<=100)

var i=1;
while (i<=100){
    if (i%3==0 && i%7==0){
        console.log(i,"Navgurukul")
    }else if (i%7==0){
        console.log(i,"Gurukul")
    }else if (i%3==0){
        console.log(i,"Nav")
    }else{
        console.log(i,"Not Match")
    }
    i++
}