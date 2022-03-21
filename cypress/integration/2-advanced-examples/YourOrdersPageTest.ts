import { RobotHands,Dependancies} from "../../Amazon/HomePage";
import { SignInRobotHands } from "../../Amazon/SignUpPage";
import { YourAccountsPageRobotHands } from "../../Amazon/YourAccountsPage";
import { YourOrdersPageRobotEyes,YourOrdersPageRobotHands } from "../../Amazon/YourOrdersPage";

const homePageDip=new Dependancies()
const homePageRobotHands=new RobotHands()      //this obj ref for launching amazon 
const signInPageRobotHands=new SignInRobotHands()  //this obj ref is for signing into the amazon

const yoursOrdersRobotEyesObj=new YourOrdersPageRobotEyes();        //this is for validating visibility of your orders page
const yourOrdersPageRobotHandsObj=new YourOrdersPageRobotHands 


describe('Goto your orders and select Past one year order',function(){
    var prop:any
    before('This is for laoding of global variables',function(){
        cy.fixture('example').then(function(data){
          prop=data
        })
    })

    before("for visiting the amaozn and siging in",function(){
        homePageDip.visitAmazon(prop.url)
        signInPageRobotHands.clickONAccountsAndSignBtn();
        signInPageRobotHands.signUpwithValidCreditentials(prop.emailId,prop.password)
    })

    it('validation of past one year orders',()=>{
        signInPageRobotHands.clickONAccountsAndSignBtn();
        yoursOrdersRobotEyesObj.visibilityOfYourOrdersBtn();
        //yoursOrdersRobotEyesObj.visibilityOfYourOrdersPage();
        yourOrdersPageRobotHandsObj.getThePastOneYearOrders();

    })
    })


