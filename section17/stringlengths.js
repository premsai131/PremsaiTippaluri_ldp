//string length 

// var thing ="hello"
// console.log(thing.length)



// password ="12345678"

// if (password.length>6){
//     console.log("should be less than 6")
// }

// var sentence ="i say hello and you say hello"

// // first occurance of string
// console.log(sentence.indexOf("hello"))

// // // last occurznce of string 

//  console.log(sentence.lastIndexOf("hello"))

//  console.log(sentence.search("and"))

var str = "happy, Exited,calm"

// var s1=str.slice(7,14)
// console.log(s1)

// var s2=str.slice(7)

// console.log(s2)

// var s3=str.slice(-13,-6)
// console.log(s3)

var str1 = "happy, Exited,calm"

var sb=str1.substring(7,14) //slice and substring are both same but negative index cannot be used
// console.log(sb)

// var sb1=str1.slice(-13,-6)
// console.log(sb1)

var slc1=str1.slice(-14-6)
console.log(slc1)