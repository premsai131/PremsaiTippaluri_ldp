class UnitConverter {

   //this funtion is being used by two events so no default arguments 
  converter=(paramter1,parameter2,parameter3)=>{
    let result=("Result = "+(paramter1*parameter2)+" "+parameter3)
    //console.log(result)
    return result
 }
 
}


var calculator =new UnitConverter


var inchToFootValue=0.083
document.getElementById("inch2feet-display").addEventListener("click",()=>{


    var inches=Number(document.getElementById("inch to feet text").value)
    document.getElementById("textfield for inch to feet").innerHTML=calculator.converter(inches,inchToFootValue,"feet")
    })
 
     ///////////feet to inch///////////
    let feetToInches =12
    //here i can reuse the above function
    
    document.getElementById("feet to inch button").addEventListener("click",()=>{

        let feets=Number(document.getElementsByClassName("feet to number text")[0].value)
        document.getElementsByClassName("textfield for feet to inch")[0].innerHTML=calculator.converter(feets,feetToInches,"inches")
    
    }  )
////////////////////////////////////////////////////////////////////////////////////////////////////////
class DateAndTime { 

  dateviewer=()=>{

        let date1 = date.getDate()
        let month = date.getMonth() + 1 //because by default it gives month-1
        let year = date.getFullYear()
        if (date1 < 10) {  //by default it gives single digit if date is <10 so 0 added here by condition
            date1 = "0" + date1; 
        }
        if (month < 10) {
            month = "0" + month;
        }
        return (date1+ "-" + month + "-" + year)
    }
currentTime=() => (date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds())

}

//6)GET CURRENT DATEand view it on the webpage/////////////////

document.getElementById("getdateformat").addEventListener("click", () => {
    document.getElementsByClassName("date viewer")[0].innerHTML = datenTime.dateviewer()


   
})


//7)TO GIVE  TIMEFORMAT////////////////////////////////////////////////////

const date = new Date()
var datenTime=new DateAndTime()
document.getElementById("getcurrenttime").addEventListener("click", () => {

    document.getElementById("timeviewer").innerHTML = datenTime.currentTime()
})
/////////////////////////////////////////////////////////////////////////////////////////////////////////
class randoms{
//for genrating a random number between 1 to 100
     randomrange = () => {
        let randoms = Math.floor(Math.random() * 100) + 1
        return randoms
    }
////for generating number between given range
     picknumber = () => {

        let startNum = Number(document.getElementById("id1").value)
        let endNum = Number(document.getElementById("id2").value)
        let randomNum = Math.floor(Math.random() * (endNum)) + startNum
        return randomNum
    }

     generatePassword =()=> {
        let add = ""
        let alpha = "abcdefghijklmnopqrstuvwxyz"
        let numbers = "1234567890"
        let special = "@"
        let length = alpha.length
        for (let i = 0; i < 5; i++) {
            add += alpha.charAt(Math.floor(Math.random() * length - 1))
            add += numbers.charAt(Math.floor(Math.random() * numbers.length - 1))
            add += special.charAt(Math.floor(Math.random() * special.length - 1))
        }
        return add
   }
 randomColourGen=()=> {

    var colours = ["blue", "green", "orange", "red", "black", "yellow"]

    let coloursCount = colours.length - 1

    var randomNumber = Math.round(Math.random() *coloursCount )
     console.log(randomNumber)
    document.getElementById("view random colour").innerHTML = colours[randomNumber]
    return colours[randomNumber]
}


 randomNames=()=> {
    const person =
    [
        {
            firstname: "shane",
            lastname: "watson"
        },
        {
            firstname: "johncena",
            lastname: "The champian"
        },
        {
            firstname: "undertaker",
            lastname: "legend"
        },
        {
            firstname: "randyorton",
            lastname: "WWE"
        },
    ]
    let jmax = person.length - 1
    let firstIndex = Math.round(Math.random() * jmax)
    let secondIndex = Math.round(Math.random() * jmax)

    // console.log(x1)
    // console.log(y1)
    let firstNames = person[firstIndex]["firstname"]
    let lastNames = person[secondIndex]["lastname"]


    return (firstNames + " " + lastNames)
}
}


var randomreturns=new randoms()

//1)first section in the assignment to get random number between 1 to 100
document.getElementById("b1").addEventListener("click", ()=> {
    // console.log("button got clicked")
    document.getElementById("p1").innerHTML = randomreturns.randomrange()
    document.getElementById("p1").style.backgroundColor = "yellow"

})


////////////////////////////////////////////////////////

////2)second section  return a number between a given range/////////////////////////////
document.getElementById("id3").addEventListener("click", () => { //main function

    document.getElementById("id4").innerText = randomreturns.picknumber()
})


//10)Random password viewer///////////////////////////////////
document.getElementById("return a randow password on click").addEventListener("click", ()=>{
    document.getElementById("passwordViewer").innerHTML = randomreturns.generatePassword()
})

//12)return random colours in webpage 
document.getElementById("random clour generator on click").addEventListener("click", randomColour)

function randomColour() {
    document.getElementById("view random colour").style.backgroundColor =randomreturns.randomColourGen()
}

//13 return random names
document.getElementById("return random names").addEventListener("click", ()=>{

    document.getElementById("random names viewer").innerHTML = randomreturns.randomNames()

})
/////////////////////////////////////////////////////////////////////////////////////////////////
class LoremIpsum{

 sentence = () => {
     const lorem = "Lorem ipsum dolor sit    amet, consectetur adipiscing elit. Morbi dictum lorem vel elit laoreet, vitae maximus ligula consectetur. Etiam magna quam, varius at risus eu, rutrum commodo lacus. Maecenas felis sem, consequat non congue non, vestibulum vitae orci. Etiam laoreet ultricies enim, sit amet gravida massa sodales vel. Vivamus tempus neque sed mi elementum ornare eget non lorem. Donec dapibus ex tortor, ut vehicula metus scelerisque eget. Aenean dictum iaculis nulla, vel dapibus justo dignissim quis. Curabitur vitae efficitur neque. Ut vitae orci semper, efficitur dolor eget, porta dui. Cras eu sapien aliquam mauris facilisis ullamcorper. Nullam facilisis sem diam, quis tempor felis interdum ut. Praesent eu nibh arcu. Proin a quam augue. Integer malesuada finibus sem eget consectetur. Aenean non hendrerit purus, quis auctor elit. Duis ullamcorper, ex vitae rutrum ullamcorper, diam justo maximus quam, eget pellentesque metus nunc sit amet arcu. Nunc id eros leo. Praesent ultricies, nunc sit amet finibus posuere, quam magna viverra lectus, non tincidunt tellus mauris sit amet turpis. Nam eleifend quam vel justo pulvinar euismod. Duis ac elit id risus ultricies sollicitudin vitae ac quam. Donec et cursus leo, non dignissim enim. Vestibulum in felis imperdiet, venenatis tortor iaculis, congue augue. Nullam egestas dui nec quam sagittis sollicitudin ac blandit turpis. Nunc in fermentum odio. Morbi sodales mi nibh, ac cursus felis ultricies sed. Quisque at porttitor risus. Aenean a massa in libero venenatis tempus sed in mi. Nullam luctus sapien eget sagittis egestas. Pellentesque eros sem, semper eu molestie in, commodo a lacus. Phasellus pellentesque erat magna, eu facilisis nibh porttitor eget. Ut id mi lobortis, consequat orci ac, vulputate metus. Sed vulputate turpis nec lectus malesuada lacinia. Quisque non mattis eros. Aliquam pellentesque urna vulputate, auctor nibh in, fermentum odio. Suspendisse aliquam neque et aliquam facilisis. Donec sapien felis, molestie vel vestibulum non, sagittis sed felis. Aenean sodales iaculis dolor eget malesuada. Fusce ac libero hendrerit, viverra nunc iaculis, maximus nisi. Nulla volutpat nisi purus, non interdum erat hendrerit vitae. Integer viverra dignissim cursus. Phasellus eu libero sed ex faucibus convallis. In et egestas ipsum. Cras a metus mollis, laoreet risus eget, ultrices purus. Duis at ligula venenatis, imperdiet nulla et, bibendum augue. Pellentesque eleifend libero maximus, pretium lectus et, condimentum metus. Nulla vel est diam. In fermentum ut nulla eget finibus. Aliquam at turpis sagittis, feugiat diam ac, pulvinar quam. Phasellus pretium porta aliquet. Nunc sit amet nisl viverra justo porttitor egestas vel vitae eros. Fusce sit amet fringilla sapien. Nunc placerat, est sit amet laoreet pretium, augue turpis lacinia ipsum, non luctus magna ipsum vel sapien. Fusce luctus odio eget nunc rutrum ullamcorper. Integer vel ligula id elit viverra aliquam. Praesent id ultricies neque. Quisque molestie tellus ac ex vulputate rhoncus. Donec nec massa eget augue tincidunt ultrices vitae at diam. Ut risus purus, egestas eu eros sed, egestas auctor erat. Integer vulputate erat nisi, in aliquet turpis faucibus vel. Praesent neque augue, congue at nunc ut, congue ultricies erat. Ut sed erat in dui ornare malesuada. Nam id elementum ex. Vestibulum condimentum erat quis erat molestie hendrerit. Etiam laoreet volutpat quam, eget ornare ex molestie mollis. Phasellus eros mi, ultrices vel dui ac, facilisis consectetur nunc. Aliquam erat volutpat. Donec rutrum laoreet iaculis."
        let sentenceSplit = lorem.split(".") //each sentences are differentiated by fullstops
        let sentenceSlice = sentenceSplit.slice(0, givenInputNum)
        return sentenceSlice
    }


    
}

var longLorem=new LoremIpsum()

///4)Returns a Lorem Ipsum String based on the number of sentences specified/////

var givenInputNum
document.getElementById("return a sentance based on input number").addEventListener("click", () => {
    givenInputNum = document.getElementById("input field for lorem").value
    document.getElementById("sentence view").innerHTML = longLorem.sentence()
})




class NumberFilter{  

  numberCheck=(number)=> {
        if (number % 2 === 0) {  //here === used for even checking the type of data entered 
            return ("even number")
        }
        else if (number % 2 == !0) {
    
            return ("odd number")
    
        }
        else {
            return ("please enter numbers only")
        }
    
    }
}

var evenOrOdd =new NumberFilter()

//check the number is even or odd 

document.getElementById("even or odd validator").addEventListener("click", ()=>{

    let num = document.getElementById("even or odd text").value
    document.getElementById("even or odd text viewer").innerHTML = evenOrOdd.numberCheck(num)
    if (evenOrOdd.numbercheck(num) === "please enter numbers only") { 
        document.getElementById("even or odd text viewer").style.backgroundColor = "red"
    }
})


class Comparion {
   validateStrings(word1, word2) {


        if (word1.length === word2.length) {
            document.getElementById("result text field").style.backgroundColor = "green"
            return ("both lengths are same")
    
        }
        else {
            document.getElementById("result text field").style.backgroundColor = "red"
            return ("both lengths are not same")
    
        }
    }
}
var comparingBoth =new Comparion




//comparing two words weather they are of same length or not\

document.getElementById("compare two strings").addEventListener("click", ()=>{
    let string1 = document.getElementById("firstword").value
    let string2 = document.getElementById("secondword").value
    document.getElementById("result text field").innerHTML = comparingBoth.validateStrings(string1, string2)
})



















