//get dom value

// innerHTML
// innerText
// getAttribute
// getAttributeNode
// attributes


let Home =document.getElementsByClassName("nav-link")[0]
console.log(Home)

let aboutus =document.getElementsByClassName("nav-link")[1]
console.log(aboutus)

let maintext=document.getElementsByClassName("text-white mb-4")[0]
console.log(maintext)

let maintext1=document.querySelector("h1")
console.log(maintext1)

let maintext2=document.querySelector("h1").innerText
console.log(maintext2)

let maintext3=document.querySelectorAll("p")[0].innerText
console.log(maintext3)

let maintexthtml=document.querySelector("h1").innerHTML
console.log(maintexthtml)

//get attribute

let att1=document.querySelector("p").getAttribute("class")

console.log(att1)

//get attributes under particular tag

let atts=document.querySelector("p").attributes[0]
console.log(atts)


//set  value

//chnage the text content  //innerText
let h=document.querySelector("h1").innerText="zemoso technologies"
console.log(h)

//change innerHTML

let h1=document.querySelector("h1").innerHTML="h13";
console.log(h1)

let a1=document.querySelector("p a").innerText
console.log(a1)

let styling=document.querySelector("header").style.backgroundcolour="black"

console.log(styling)

//className

let h=document.querySelectorAll("div")[0]
let a=h.className="fixed-top bg-danger"
console.log(a)

//how to get the parent element from the child element and operatins on parent element
let h12=document.querySelector("h1") 
let getparent=h12.parentElement.style.changeBackgroungColour="red"
console.log(getparent)

//how to get the parent node from the child element

let h11=document.querySelector("h1")
let parentnode=h11.parentElement;
console.log(parentnode)

let h13=document.querySelector("h1").parentElement;
console.log(parentnode)

//children and child nodes

let a12=document.querySelectorAll(".owl-item active")
console.log(a12)





