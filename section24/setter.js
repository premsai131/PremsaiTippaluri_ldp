//here i use setter method to change the values in the object properties

var traveller ={
     firstname : "premsai",
     lastname :"tippaluri",
     date : "12-12-2022",
     place :"chennai",
     get details (){
         return this.firstname +this.lastname
     },
   set details(value){
       var name =value.split(" ")
       this.firstname =name[0],
      this.lastname =name[1]
       


   }
}
console.log(traveller.details)

traveller.details ="bob jones"
console.log(traveller.details)

console.log(traveller.firstname)