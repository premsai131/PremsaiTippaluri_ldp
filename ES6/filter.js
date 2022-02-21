// const numbers = [1, -1, 2, 3,5,8];

// const filtered =numbers.filter(function(value){
//     return value >=0;
// });

// console.log(filtered)



const arr=[1,5,3,9,4,2,82]

const filtering =arr.filter(function iseven(x){
    return x%2==0
})

console.log(filtering)

const filtering1=arr.filter((x)=> x %2 !=0
)
console.log(filtering1)