let groot=(name:string):void=>{
    let mssg:string=`name is ${name}`
    console.log(mssg)

};
groot("premsai")

//function returns somthing or the other

let add20 =(a:number,b:number)=>{
    let adding=`addition of a and b is ${a+b}`
    return adding  }

    console.log(add20)

  let volumeCalculation =(a:number,b:number,c:number)=>{
      let volume=`volume of a*b*c id ${a*b*c}`
      return volume
  }  

  console.group(volumeCalculation(20,40,35)) //now this will return the volume

  

  interface Endgame{
      names:string;
      age:number;
      villain:string;
      ironman:string
  }
  let endgame:Endgame={
    names:"roky",
    age:40,
    villain:"thanos",
    ironman:"robert dowrny"
  }        

console.log(endgame.names)
  