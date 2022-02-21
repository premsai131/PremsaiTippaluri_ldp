for (var i =1 ;i<5; i++){
    console.log(i)
}

var square
for (var i=1;i<=3;i++){
    for(var j=1;j<=3;j++){
        console.log(j)
    }
}

var square =""

for (var i =0; i <5 ; i++){
    for (var j =0; j<5; j++){
        square =square +" "+ j
    }
    square =square +"\n"
}
console.log(square)

var triangle =""
for (var i =5; i>0;i--){
    for(j=1;j<=i;j++){
        triangle = triangle + " "+j
    }
    triangle = triangle +"\n"
}
console.log(triangle)






