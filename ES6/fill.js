var arr1 =[1,2,3,5,6,6,89,52]


//this is actually a fill function which takes three arguments replacevalue,start and stop
var replacing =arr1.fill("john").join(".")
console.log(replacing)



 var replacing1 = ()=>arr1.fill("joncena",2,5) //here i have given the start and stop means stop-1
console.log(replacing1())