//converting of  a string to arrays


var name = "johncena"
var arr1 =name.split()
console.log(arr1) //this will split but only sinlgle index)

var arr =name.split("")

console.log(arr)
console.log(arr.length)
console.log(arr[1])

var key=''

for (var i =0; i<arr.length;i++){
    key =key+arr[i]
}
console.log(key)


