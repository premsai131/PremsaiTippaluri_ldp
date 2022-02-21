



function addition(a,b){
    return a+b
}
function validation(expected,actual){
    if(expected === actual){ //this === three equals will even check the type of data you are probabily comapring
        console.log("the function is working as like your requirements")
    }
    else{
        console.log("the function is not working as like of your requirement")
    }
}

validation("4",addition(2,2))


// function addition2(a,b){
//     let result =a+b
//     if (result != a+b){
//     return true
// }else{
//     return false
// }
// // }
// function validation2(expected,actual){
//     if(expected === actual){ //this === three equals will even check the type of data you are probabily comapring
//         console.log("the function is working fine ")
//     }
//     else{
//         console.log("the function is not fine")
//     }
// }

// validation2(true,addition2(1,1)) //just checking it weather it returns true or false

// function random100(){
//     const randoms =math.floor(math.random()*100)+1,
//     return randoms
// }
