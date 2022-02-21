const ps = require ("prompt-sync")
const prompt =ps();

var favnum=3


if(favnum == 3){
    console.log("fav number is correct")
} else if(favnum == 2) {
    console.log("fav number is 2")
} else if(favnum == 4) {
    console.log("favnum is 4")
}

var favfood = "pasta"

switch(favfood) {
    case "pizze" :
        console.log("pizza")
        break
    case "pasta" :
        console.log("pasta")
        break
    default :
        console.log(favfood)
    }

//assignment 

var favcolour =prompt("please enter your fav colour")

switch(favcolour){
    case "blue" :
        console.log("blue is my fav colour")
        break
    case "red" :
        console.log("red is my fav colour")
        break
    default :
       console.log("no colour matching to your fav")
 
}