//object oriented progrmming

class Mobile {
    //access modifier
   //private //can only be accessible in the same class
   //protected//own class and inherited outside
   //public every where 
   private brand:string;
   private colour:string;
   private price1: number;

   constructor(brand:string,colour:string,price1:number){
       this.brand=brand
       this.colour=colour
       this.price1=this.price
   }

   //getter -setter 
   public getBrand():string{ 
       return this.brand;
   }
   public getcolour():string{
       return this.colour
   }
   public getprice1():number{
       return this.price1
   }
   public setBrand(brand:string){
       this.brand=brand

   }

   }
   let mobiles1 =new Mobile("samsung","silver",40000)

   console.log(mobiles1)
   console.log(mobiles1.brand) //private variables cannot be accessed outside the class
   console.log(mobiles1.getBrand())
   var newbrand =mobiles1.setBrand("apple")
   console.log(newbrand)




   
   






