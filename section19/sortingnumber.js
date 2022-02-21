var array1 =[6,5,1,3,4]

var array2 =[100,85,50,86,90]
var result1 =array1.sort();
var result2 =array2.sort(); //it is not going by the value it is going by the each character by character
console.log(result1)
console.log(result2)
var result3 =array2.sort(function(a,b){return a - b})
console.log(result3)