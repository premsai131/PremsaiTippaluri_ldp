// comparing multiple sets of data in the if statement 

"use strict";

const ps = require ("prompt-sync")
const prompt =ps();

// && : and 
// || : or

if (1 == 1 && 2 == 2){
    console.log("both the conditions are true")
}
else if (1 == 1 && 2 === 3){
    console.log("both the conditions are same")
}

if (1 == 1 || 2 == 2){
    console.log(">>>>one of  the conditions are true")
}
else if (1 == 2 || 2 === 3){
    console.log("both the conditions are same")
}

var ans1 =prompt("please enter colour1")
var ans2 =prompt("please  enter colour2")

if(ans1 == "blue" || ans2 == "green")
{
    console.log("one of the statement is true >> if part executed")
} else if(ans1 == "yellow" || ans2 == "orange")
{
    console.log("yeah the elseif part is getting executed")
}
