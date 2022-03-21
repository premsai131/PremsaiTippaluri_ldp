import { Dependancies } from "../../Amazon/HomePage";

import { SignInRobotHands } from "../../Amazon/SignUpPage";
import { PaymentsOptionRobotHands,PayementsOptionRobotEyes } from "../../Amazon/PaymentsOptionPage";

const homePageDip=new Dependancies();  //this is for launching the the page 
const signInPageRobohands=new SignInRobotHands(); //this is for signing in to the amazon site 

const paymentsPageRobotHandsObj=new PaymentsOptionRobotHands(); //this is for visibility of payments options
const paymentsPageRobotEyesObj=new PayementsOptionRobotEyes(); //this is for validation of payments actions


describe('validation of visibilty of new payment option',function(){
    var prop:any
    before('for loading of global variables',()=>{
      cy.fixture('example').then((data)=>{
         prop=data
      })
    })
    before('this is for launching the site and signup',function(){
        homePageDip.visitAmazon(prop.url);
        signInPageRobohands.clickONAccountsAndSignBtn();
        signInPageRobohands.signUpwithValidCreditentials(prop.emailId,prop.password);
    })

    it('validation of adding new payment option visibility',function(){
        signInPageRobohands.clickONAccountsAndSignBtn();
        paymentsPageRobotEyesObj.visibilityOfPaymentsOptionBtn();
        paymentsPageRobotHandsObj.clickOnPaymentsOptionBtn();
        paymentsPageRobotEyesObj.visibilityOfManageBankAccountsBtn();
        paymentsPageRobotHandsObj.clickOnManageBankAccountsBtn();
        paymentsPageRobotEyesObj.visibilityOfAddNewBankAccountLink();
    })
})
