import { SignatureKind } from "typescript";
import { BaseEyes,BaseHands } from "../robot/BaseRobot";

/*THIS PAGE IS JUST FOR SIGNING INTO THE AMAZON WITH VALID CREIDENTIALS */




export class SignUpPageRobotEyes extends BaseEyes{
    visibilityOfAccountsAndSign(){
        this.seesIdVisible('nav-link-accountList')
    }
    visibilityOfPersonName(){
        this.seesIdVisible('glow-ingress-line1')

    }

}

export class SignInRobotHands extends BaseHands{
    clickONAccountsAndSignBtn(){
        this.clickOnId('nav-link-accountList')
    }
     signUpwithValidCreditentials(emailId:any,password:any){
         this.typeTextonId('ap_email',emailId);
         this.clickOnDomElement('input[type=submit]')
         this.typeTextonId('ap_password',password);
         this.clickOnId('signInSubmit')
     }
 
}