function addition(a,b){
   return console.log(a+b)

}

var timeout=setTimeout(()=>{ ///asynchronisation........
    for (var i=0;i<=1000;i++){
        console.log(i)
       
    }

},3000)

function multiplication(a,b){
    return console.log(a*b)
}

addition(20,40)
timeout
multiplication(20,10)