//classes are like blueprints just like java
class winner {
    constructor (firstname,secondname,battle){
        this.firstname =firstname,
        this.lastname=secondname
        this.battle =battle
    }
 getFullDetails(){
        return (this.firstname+" "+this.lastname+" won the battle of "+ this.cage)
    }
editname(newname){
    const myname =newname.split(" ")
    this.firstname =myname[0]
    this.lastname=myname[1]
}

    }


const person =new winner("john","cena","cage")
console.log(person.getFullDetails())

person.editname("under taker")//at first you have to pass the parameter into it and that will split and update 
//the parameters present inside the constructor and will get you the edite values accordingly
console.log(person.getFullDetails())
