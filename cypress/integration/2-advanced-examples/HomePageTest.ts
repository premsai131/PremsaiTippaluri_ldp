/// <reference types="cypress" />

import { Dependancies,RobotEyes, RobotHands } from "../../Amazon/HomePage";

const dependancies = new Dependancies();
   const robotEyes=new RobotEyes();
   const robotHands=new RobotHands();
   describe('login test',()=>{
    var properties:any;  
     before('For reading of global variables',function(){
           cy.fixture('example').then(function(data){
               properties=data
           })
       }) 
   

    it("verify home page",function(){ 
        dependancies.visitAmazon(properties.url)  
        robotEyes.seesMainPage()
    })

    it("verify TodaysDeals page Button",function(){
        robotEyes.seesTodaysDealPage()
        robotHands.clickOnTodaysDealsPage()
    })
   })
