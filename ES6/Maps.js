// var myMap =new Map()

// myMap.set(1,"john")
// myMap.set(2,"kane")
// myMap.set(3,"virat")

// console.log(myMap)

// //how to get the values using loop

// for (let key of myMap.keys()) {
//     console.log('key is ${key}');
// }

// for (let value of myMap.values()){
//     console.log('value is ${value}');
// }



var arr =[1,2,3,4,5,6,7] //now i need to add all the array elements using for each loop or map

var addition =0

var add =arr.forEach(function(value){
    addition=addition+value
    console.log(addition)//each time it adds with the index value it gets 
    return addition //each time it returns addition with new value and evrytime that global additin will be updated
    
})
console.log(addition) //finaly updated global addition will be displayed here after all the loops 

///noq i use maps to do the same thing like i do multiplication of an array of elements 


var num =[1,40,50,42,0,75,2,8]
var add=0
var addition2=num.map((x)=> add=add+x) //am just writing it in a single line using arrow functin like implicitly calling 
console.log(add) //so if you see this also does the same thing


//iam using filter function to add numbers in an array
var number =[12,2,3,3,82,85,8]
var afteradding =0
var filtering =number.filter(function(value){ //am using filter function to add the  numbers present in the array
      
         afteradding =afteradding+value
         //console.log(afteradding)
         return afteradding 
         
})

console.log(afteradding)

//iam using filter function with some condition against an array

var array1=[
    {
        name:"premsai",
        age :23
    },
    {
        name:"johncena",
        age:40
    },
    {
        name:"virat",
        age:32
    }
]

console.log(array1[0].age)
var agefiltering=array1.filter(function(value){
    
return value.age>30
}

)
console.log(agefiltering)