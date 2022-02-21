function btnpressed(){
  console.log("btn1 was pressed")
  document.getElementById("p1").innerText= "button1 is pressed"
}

// function txttyped1(){
//     console.log("user typing something")

//     if(document.getElementById("id1").value == "1234"){
//         document.getElementById("p2").innerHTML ="the data you entered is valid";
//     }else{
//         document.getElementById("p2").innerHTML ="The data you entered is invalid";
//     }
    


document.getElementById("b1").addEventListener("click",btnpress)
function btnpress(){
    console.log("button pressed")
    if(document.getElementById("id1").value == "premsai"){
        document.getElementById("p3").innerHTML="the username you entered is correct";

    } else{
        document.getElementById("p3").innerHTML="the username you entered is incorrect"
    }
   
}

//one more eventlistener for 2nd text field present 
document.getElementById("b2").addEventListener("click",btn1press)

function btn1press(){
console.log("typing the text")

if(document.getElementById("id2").value=="1234"){
    document.getElementById("p4").innerText="the password you entered is correct"
} else {
    document.getElementById("p4").innerText= "the password you entered is incorrect"
}
}

//i can even add mouseover event also here for the second text field

document.getElementById("id2").addEventListener("mouseover",textchange)
function textchange(){
document.getElementById("p4").innerText="you have been moused"

}