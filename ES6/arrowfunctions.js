
//this is a typical way of declaring a function
let addition =function(a,b){
    return (a+b)
}

console.log(addition(10,40))

//how to use arrow function to declare a function 

let subtraction =(a,b) => return (a-b)
    
}
console.log(subtraction(40,15))

let multiplication = (a,b) => a*b; /*
if the function has only one line of code and then you can directly write beside the arrow but exclude return*/

console.log(multiplication(25,80))

let a="10"
a="20"
console.log(a)


const todo=[
    {
        task:"morning walk",
        ans :"true"
    },
    {
        task :"gym",
        ans :"false"
    },
    {
        task :"food",
        ans:"true"
    }
]

//now i am gonna use filter over here with call back function 
const name =todo.filter((todo)=>
     todo.ans===true

)

console.log(name)



const numbers =[1,2,-5,-5,6,8]

const positives =numbers.filter(function(numbers){
return numbers >0

})

console.log(positives)
