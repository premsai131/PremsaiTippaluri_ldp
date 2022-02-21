class parent {
  constructor (){
   this.age =23.4
}
printage (){
   //console.log(this.age)
   console.log("age is "+this.age)
}

}
const per =new parent()
console.log(per.printage())

class person extends parent {
constructor (){
     super()
    this.name="prem"
}
 printname(){
     console.log("name of the person is "+this.name)

}

}

var details=new person()

details.printname()
details.printage()

