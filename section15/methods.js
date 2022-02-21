var courses ={
    frontend :["html","javascript","css"],
    checkout : function() {
        console.log("you hav checkedout the courses "+courses.frontend)
    },
    checkin : function(number) {
        console.log("you are checked in "+number+ " courses")
    }

    }

   courses.checkout() //now it is a method inside an object or function inside an object
   courses.checkin(2)
   

   var movies = {
       hollywood : ["spyderman","avengers"],
       checkout :function (name) {
           if (name == "spyderman"){
           console.log("the movie you like is "+ movies["hollywood"]["0"])
           }
           else if (name == "avengers"){
               console.log("the movie you like is "+movies["hollywood"]["1"])

           }


       }
   }

movies.checkout("spyderman")
movies.checkout("avengers")



var restaurent = {
    menu : {
        vegstarters :["babycorn","nuggets","chillymushroom"],
        nonvegstarters:["fish","chilly","chicekn65"]
    },
    itemsamount : {
        babyco rn : 180,
        nuggets :120,
        chillymushroom :220,
        fish :200,
        chilly :250,
        chicekn65 : 250
    },

    order : function(itemname) {
        if (itemname ==restaurent.menu.vegstarters[0]) {
            console.log("you ordered "+ restaurent["menu"]["vegstarters"][0]+ " and the amount is "+restaurent["itemsamount"]["babycorn"])
        }
        else if (itemname ==restaurent.menu.vegstarters[1]) {
            console.log("you ordered "+ restaurent["menu"]["vegstarters"][1]+ " and the amount is "+restaurent["itemsamount"]["nuggets"])
        }
     
    }
}


restaurent.order("babycorn")
//restuarent.order("nuggets")
restaurent.order("nuggets")
