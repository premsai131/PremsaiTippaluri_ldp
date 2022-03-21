import { RobotHands,Dependancies } from "../../Amazon/HomePage";

import { SignInRobotHands } from "../../Amazon/SignUpPage";
import { YourAccountsPageRobotEyes,YourAccountsPageRobotHands } from "../../Amazon/YourAccountsPage";


const homePageDependancies=new Dependancies();
const signInRobotHands=new SignInRobotHands();

const yourAccroboeyes =new YourAccountsPageRobotEyes();
const yourAccRoboHands=new YourAccountsPageRobotHands();

describe("validation of Expected delivery date ",function(){
    var prop:any
    before('Reading of global variables ',function(){
        cy.fixture('example').then(function(data){
            prop=data;
        })
       
    })


    before('logging into amazon website',function(){
        homePageDependancies.visitAmazon(prop.url)     //this is for visiting of amazon site 
        signInRobotHands.clickONAccountsAndSignBtn();
        signInRobotHands.signUpwithValidCreditentials(prop.emailId,prop.password)
    })
    it('validation of visibility of expected delivery date of a product',function(){
        signInRobotHands.clickONAccountsAndSignBtn();
         yourAccroboeyes.visibilityOfPrimeButton();
         yourAccRoboHands.gettingTheExpectedDeliveryDateOfProduct();
    })

})