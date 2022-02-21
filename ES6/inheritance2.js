class parent {

      printage = () =>{
       console.log("23")
    }
    
    }
    const per =new parent()
    console.log(per.printage())
    
    class person extends parent {
        constructor(){
            super()
            this.name="prem"
        }
   
     printname =()=>{
         console.log(this.name)
    
    }
    
    }
    
    var details=new person()
    
    details.printname()
    details.printage()
    