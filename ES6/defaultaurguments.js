
//here i used arrow function and default aurguments inside the parametres
var multiplication= (a,b=10,c=20)=> a*b*c

console.log(multiplication(10))

var add =()=>{
    b=40
    console.log(this) //this keyword refers to the entire window here
}
console.log(add())

function sub(){
    a=40
    console.log(this) // this refers to the parent window
}
console.log(sub())
