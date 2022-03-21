//import { BaseDependencies,BaseEyes,BaseHands } from "../../robot/BaseRobot";
import { GetTheDeailsOFMobile, SearchMobiles } from "../../Amazon/SearchPage";
import { Dependancies,RobotEyes,RobotHands } from "../../Amazon/HomePage";

const searchMobilesDip=new Dependancies();
const searchMobilesRobotEyes=new RobotEyes();
const searchMobilesRobotHands=new RobotHands();


const searchMobile=new SearchMobiles();
const getTheDeailsOFMobile=new GetTheDeailsOFMobile
describe('validate search page',function(){
    var properties:any
    before (function(){

    
    cy.fixture('example').then(function(data){
        properties =data
    })
})
before ('login prerequisite',function(){
    searchMobilesDip.visitAmazon(properties.url);


})

    it('search for mobiles',function(){
        searchMobile.searchForMobiles();
       // searchMobile.clickOnLastDisplayedMobiles();
        getTheDeailsOFMobile.getTheTextOFLastDisplayedMobile();       
        
    })


})