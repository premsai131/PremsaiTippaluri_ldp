// //  a= [1,2,3,6,6,9,5]

// //  a.pop();//deletes index at the last index 

// //  console.log(a)

//  b=[1,2,8,9,2,8,3,1]

//  b.push(2)//adds elements in the last index 

//  console.log(b)

//  c=["apple","orange","grape"]

//  c.shift()//deletes the first index element everytoime we use shift 
// console.log(c)

// d=["sql","advjava","html","css"]

// d.unshift("corejava")
// console.log(d)//add the elment in the first index position

// //slicing 

var courses=["java","sql","selenium","cucumber","testng","jenkins"]
numbers =courses.slice(2,4)
number2 =courses.slice(-3)
console.log(number2)

var participants =["rion","alexa","jai","peterson","bruice"]
winners=participants.slice(0,-3)

console.log(winners)

var user =["ted","tom","sam","curren","billingson"]
user.splice(1,2,"hi","bye")
user.splice(1,1)

console.log(user)











