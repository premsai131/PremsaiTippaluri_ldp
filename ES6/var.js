// var s =40
// if(s==40){
//     s=50
//     console.log(s)
// }
// s=60
// console.log(s) //here the s got updated because of declaring variable outside the scope

// // var s =40
// if(z==40){ /*it will automatically shows z is undefined because if you are using somthing
//  some block of code then varible needs to be defind before the lines of code */
//     z=50
//     console.log(z)
// }
// var z=50 // i declared variable after the block of code 
// //generally we declare variable with var when it is high level or globally needed 


var name
var age 
var country
 function person() {
     name = "undertaker",
     age  ="55",
     country ="usa"
}
 

console.log(age) //var is function scoped you cannot access varibles outside the function


if (40==40){
    var a="premsai"
}

console.log(a)//var is function scoped only not blocked scoped it can be accessed outside the block