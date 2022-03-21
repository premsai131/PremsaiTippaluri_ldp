import { TodaysDealRobotEyes, TodaysDealRobotHands } from "../../Amazon/TodaysDealPage";
import { Dependancies,RobotEyes,RobotHands } from "../../Amazon/HomePage";

   const todaysDealRobotEyes=new TodaysDealRobotEyes();
   const todaysDealRobotHands=new TodaysDealRobotHands();
   const homePagedip=new Dependancies();
   const homePageRobotHands=new RobotHands()

describe('validation of 3rd point in the assignment',(function(){
   var properties:any;
   before(function(){
      cy.fixture('example').then(function(data){
         properties=data
      })
   })

   before('prerequisites for todays deals',function(){
      
      homePagedip.visitAmazon(properties.url); //This is for visiting of website
      homePageRobotHands.clickOnTodaysDealsPage(); //This is for clicking on the todaysdeal button
   })
   it('validate visibility todays deal page',function(){
      //todaysDealRobotEyes.visibilityOfTodaysDealsPage()
   })

   it('validate third deal',function(){
      todaysDealRobotHands.clickOnThirdDeal()
      //todaysDealRobotHands.clickOnFirstDeal()
     todaysDealRobotHands.clickOnFirstElementInsideThirdDeal()
   })

   it('validate visibility Of Add To CartButton',function(){
      todaysDealRobotHands.clickOnAddToCartBtn();
      
      todaysDealRobotEyes.seesAddToCartBtnAgain();
      todaysDealRobotEyes.seesQuantityAddedInDropDown();
   })
}))

