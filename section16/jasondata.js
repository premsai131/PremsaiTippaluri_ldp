//json data basics
//java script object notation 

var college = {
    "name" : "narayana",
    "classes" : [
        {
            "campus" : "nellore",
             "branch" : "mpc",
             "area"  : "s2"  
        },
        {
            "campus" : "vijayawada",
            "branch" : "bipc"
        },
        {
            "campus" : "hyderabd",
            "branch" :  "mpc",
            "area"   : "gandhinagar"
        }
                 
    ]
}
console.log(college.name)
console.log(college.classes[1])

console.log(college["classes"][2])