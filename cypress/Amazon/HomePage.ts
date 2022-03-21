import { BaseEyes,BaseHands,BaseDependencies } from "../robot/BaseRobot";

 
export class Dependancies extends BaseDependencies{

    visitAmazon(url:any){
        this.accessUrl(url)
    }
}

export class RobotEyes extends BaseEyes{
    
    seesMainPage(){
        this.seesIdVisible("nav-logo-sprites")
    }
    seesTodaysDealPage(){
        this.seesIdVisible('nav-xshop>a:nth-of-type(4)')
    }

}

export class RobotHands extends BaseHands{
    clickOnTodaysDealsPage(){
        this.clickOnId('nav-xshop>a:nth-of-type(4)')
    }
}