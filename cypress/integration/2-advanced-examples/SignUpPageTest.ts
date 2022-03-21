import { Dependancies,RobotEyes } from "../../Amazon/HomePage";
import { SignUpPageRobotEyes,SignInRobotHands } from "../../Amazon/SignUpPage";

const signUpdip=new Dependancies();  //this object is for visiting the amazon site 
const signUpRobotEyes=new RobotEyes(); //this obejct is for checking weather amazon site is opened or not

const signUpSeesSignUpPage=new SignUpPageRobotEyes();
const signUpSiginPage=new SignInRobotHands();


describe ('validation of signpage',function(){
    var properties:any;
   before('This is for loading of the global variables',function(){
        cy.fixture('example').then(function(data){
            properties=data
        })
    })


    before('validation of amazon url ',function(){
        signUpdip.visitAmazon(properties.url);
        signUpRobotEyes.seesMainPage();
    })

    it('validation of signUp page',function(){
        signUpSeesSignUpPage.visibilityOfAccountsAndSign();
        signUpSiginPage.clickONAccountsAndSignBtn();
        signUpSiginPage.signUpwithValidCreditentials(properties.emailId,properties.password);
        signUpSeesSignUpPage.visibilityOfPersonName();

    })


})