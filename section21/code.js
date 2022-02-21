// var thing = "hellowold"




// var head2= document.getElementsById("heading")
// console.log(head2)

// var idea =document.getElementsByClassName("content")[0].innerText
// console.log(idea)

// var heading2Text =document.getElementByTagName("h2")[0]

// console.log(heading2text)

// console.log(document)

// console.log(document.body)

// console.log(document.title)
// console.log(document.head)


// let h1text =document.getElementById("heading").firstChild
// console.log(h1text)

// var h1sibling =document.getElementById("heading").nextSibling
// console.log(h1sibling)

document.getElementById("heading").innerHTML="THIS IS A HEADING"

document.getElementById("logo").alt ="bug"

var p = document.createElement("p")
var ptext =document.createTextNode("new paragraph")
p.appendChild(ptext)

Document.getElementById("main").appendchild(p)

var header=document.getElementById("heading")
console.log(header)

var clsname=document.getElementsByClassName("content")[0]
console.log(clsname)


//querryselector how to use it it takes id class and tag but if finds the element in the first it gives tht element from top to bottom 

let header1=document.querySelector("#heading");
console.log(header1)

let clsname1=document.querySelector(".content")
console.log(clsname1)

let clsname2=document.querySelectorAll(".content ")[0]
console.log(clsname2)

//we use this to get the element of that node
let h1text=document.getElementById("heading").firstChild
console.log(h1text)

let h1sib=document.getElementById("heading").nextSibling
console.log(h1sib)

let h1parent=document.getElementById("heading").parentNode
console.log(h1parent)

let write=document.getElementById("heading").innerHTML="zemosoTechnologies"
console.log(write)

let p1= document.createElement("p")
let ptext1=document.createTextNode("newparagrapph")
p1.appendChild(ptext1)

//document.getElementById("main").appendchild(p1)

document.getElementById("main").insertBefore(p1, h1parent)

