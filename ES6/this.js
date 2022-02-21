const person ={
    name :"john cena",
    country :"usa ",
    details : function (){
        return this
    }
}

console.log(person.details()) /*a function written in an object is actually a method and if you are using this keyword in a method then 
while calling that particular method function written in the object you get all the objects present in the object
*/
const man=person.details
console.log(man) //its all about how you are calling the method in the object 
//if you see this situation you get the parent window

//const details =person.details.