function forlooop(){
    for (var i=0;i<5;i++){
        console.log(i)
    }
    console.log(i)

}

console.log(forlooop())
 
function newloop(){
    for (let i=0;i<5;i++){ 
        console.log(i)
    }
    console.log(i)  /*here see the scope of variable limited and it is 
    warning us this is the speciality of typescript*/
}

console.log(newloop())


let count =5
count ="a"   //see the error is caught because data type is not matching

let a:number =123
let b:boolean =true
let c:string ="johncena"
let d:any[] =[1,2,2,"john",true]
let e:string[]=[1,2,3];
let h:string[]=["premsai","undertaker","markhendry"]
let f:any[] =[1,true,'a',false];



//void 
let greek =(name:string):void=> {

    console.log(`hello ${name}`);
};
greek("premsai");

//Enum is used to store constant values or constant variables

enum Person{
    name ="premsai";
    age =23
}

console.log(Person.name); //premsai

let john:any //never ever user any 