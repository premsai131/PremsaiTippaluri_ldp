let message;
message ="abc";

let alternativeway =(message as string).endsWith('c')
let typicalway =(<string>message).endsWith('c')

let log=function (){
    console.log(message)
}

let dolog =() => console.log();