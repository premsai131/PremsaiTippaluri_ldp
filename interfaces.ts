


let mobiles:Object={
    name:"samsung",
    country:"korea",
    price:40000

}
console.log(mobiles)
console.log(mobiles.name)//iam not able to access this because the t

interface Mobile{
    name:string;
    country:string;
    price:number
}

let mobiles:Mobile={
    name:"samsung",
    country:"korea",
    price:40000
}

console.log(mobiles.name)
console.log(mobiles.country)
console.log(mobiles.price)

interface Student {
name:string;
age:number;
course:string
address:{
street:string
city:string
}

}

interface Address{
    street: string
    city:string
    state:string
}

let student:Student={
    name :"premsai",
    age:24,
    course:"qa",
    address:{
        street:"hill station",
        city:"hyderbad"

    }
    }


//console.log(student.address["street"])