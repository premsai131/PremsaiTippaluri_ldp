//if else conditions 

"use strict";

const ps = require ("prompt-sync")
const prompt =ps();

var a =20
var b =40

if (a==b){
    console.log("both are matching")
} else {
    console.log("both doesnot match")
}

var x =40;
var y =35

if (x!=y){
    console.log(">>>both values doesnotmatch<<<")
} else {
    console.log(">>both values match<<<")
}

var answer =prompt("what is your name")

var animal =prompt("please enter the name of the animal")

if (animal == "dog")
{
    console.log("the animal is correct")
} else if (animal =="cat")
{
    console.log("animal name is cat")
} else if (animal == "elepahnt")
{
    console.log("animal is elephant")
} else {
    console.log("any animal doesnot match")
}


const age = 18;

if (age < 18) {
  console.log("alex is under 18 years old.");
} else if (age >= 18 && age <= 21) {
  console.log("Alex is between the ages of 18 and 21.");
} else {
  console.log("Alex is over 21 years old.");
}