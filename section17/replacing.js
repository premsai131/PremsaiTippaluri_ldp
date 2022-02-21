var str = "i have turkey for lunch and turkey for dinner"
var lunch = str.replace("turkey","pasta")

console.log(lunch)

lunch =str.replace("pasta","turkey")
console.log(lunch)

lunch =str.replace(/TURKEY/i,"pasta") // for casesensitive use i
console.log(lunch)

lunch =str.replace("pasta","turkey")
console.log(lunch)

lunch =str.replace (/TURKEY/gi,"pasta")
console.log(lunch)

