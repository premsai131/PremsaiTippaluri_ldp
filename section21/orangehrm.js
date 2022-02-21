let login_field= document.getElementById("divUsername")
console.log(login_field) //ids will allways be unique that is why the function to egt the id elements is also 
//in a singluar form only like getElementbyId


let loginfield2=document.getElementById("txtUsername")
console.log(loginfield2)

let password_field =document.getElementById("divPassword")
console.log(password_field)

let passwordfield2=document.getElementById("txtPassword")
console.log(passwordfield2)


let button1= document.getElementById("btnLogin")
console.log(button1)

//ByTagName Elements (many)
let tags1 =document.getElementsByTagName("a")
console.log(tags1)
//this gives all the tag element links  with a tag

//if you want specific link then use indexing 

let tags2=document.getElementsByTagName("a")[0];
console.log(tags2) //now that index element will be given

let tags3=document.getElementsByTagName("a")[2]
console.log(tags3)

/////using ByclassName
let clsname=document.getElementsByClassName("form-hint")//this gives all the elements with that attribute value
console.log(clsname)

//to get the particular element using classname the use indexing 

let clsname1=document.getElementsByClassName("form-hint")[0]//by using using i can get the paricular element in the array of class
console.log(clsname1) //now i can get username

let clsname2=document.getElementsByClassName("form-hint")[1] //i can get the 1nd index value in the array of class element
console.log(clsname2) 


//querryselector takes all id classname and tagnames but only disadvantage is gives the first element


let queryid1=document.querySelector("#divUsername") //elemnt is by ID //user # while using id element
console.log(queryid1)

let queryclsname=document.querySelector(".form-hint") //use . while using class elemtn
console.log(queryclsname)
//now if you observe it is not giving all the elements in the array it is giving out 1st index element only

let queryclsname2=document.querySelector(".form-hint")[1]
console.log(queryclsname2)
//queryselector wont take indexes like how classnames takes indexes this is the drawback here in qs

let querytagname=document.querySelector("a")
console.log(querytagname) //gives the first element it find with that tag name

let querytagname=document.querySelector("a")[2]//indexes wont work here 
console.log(querytagname)

let queryclsname3=document.querySelectorAll(".form-hint")[0] //it takes indexes
console.log(queryclsname3)

let queryclsname4=document.querySelectorAll(".form-hint")[1] //gives the second element in the array 
console.log(queryclsname4)

let querytagname1=document.querySelectorAll("a") //entire arraylist
console.log(querytagname1)

let querytagname2=document.querySelectorAll("a")[0] //gives first index element only
console.log(querytagname2)

let doc =document  //total document will be given in the console
console.log(doc)


let doc1 =document.all
console.log(doc1)

let title =document.title
console.log(title)

let img=document.images
console.log(img)

let img2=document.images[1]
console.log(img2)

let forms =document.forms
console.log(forms)

let forms1 =document.forms[1]
console.log(forms1)

let docall =document.all.forms[0]
console.log(docall)

//get dom value

// innerHTML
// innerText
// getAttribute
// getAttributeNode
// attributes


let header1=document.query
