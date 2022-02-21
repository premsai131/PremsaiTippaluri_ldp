parent ={
    name :"premsai",
    age :  23,
    favcolour:"bLACK"
}

//console.log(parent.name)
 //delete parent.favcolour

//console.log(parent.favcolour)

Ticketdetails = {
    name :"alex",
    age : 28,
    dateofbooking:"20-02-2022",
    destination :"varanasi",
    ticketno :"pnr12cd48528a",
    get basicdetails(){
        console.log(this.name+this.age+this.destination)

    }


}
console.log(Ticketdetails.basicdetails)