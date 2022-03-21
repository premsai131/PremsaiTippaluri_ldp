import { Dependancies,RobotHands,RobotEyes } from "../../Amazon/HomePage";

import { DeliveryAddressRobotHands } from "../../Amazon/DeliveryAddressPage";
import { SignInRobotHands } from "../../Amazon/SignUpPage";
const homePageDip=new Dependancies();
const homePageRobotHands=new RobotHands();
const homePageRobotEyes=new RobotEyes();

const deliveryAddressRobotHands =new DeliveryAddressRobotHands();
 
const signUpRoboHands =new SignInRobotHands();

describe ('validation of delivery addess page',function(){

var properties:any
  before ('for reading of global variables',function(){  //for loading of environment variables 
      cy.fixture('example').then((data)=>{
          properties=data
      })
  })
    before('for visiting of amazon site',function(){
        homePageDip.visitAmazon(properties.url)
        homePageRobotEyes.seesMainPage();
    })
    before('for signing in to the site',function(){
        signUpRoboHands.clickONAccountsAndSignBtn()
      signUpRoboHands.signUpwithValidCreditentials(properties.emailId,properties.password)
    })

    it('validation of adding new delivery address',function(){

        deliveryAddressRobotHands.addNewDeliveryAddress(properties.country,properties.fullName,properties.mobileNumber,properties.pinCode,properties.flatAddress,properties.area,properties.landMark,properties.state,properties.addressType)
    })

})