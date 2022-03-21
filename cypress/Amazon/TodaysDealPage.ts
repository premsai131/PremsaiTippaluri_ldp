import { BaseEyes,BaseDependencies,BaseHands } from "../robot/BaseRobot";

export class TodaysDealRobotEyes extends BaseEyes{
    visibilityOfTodaysDealsPage(){
        this.seesTextWithId('slot-2',"Today's Deals")
    }
    visibilityOfAddToCartButton(){
        this.seesValueWithId('add-to-cart-button','Add to Cart')
    }
    seesSkipBtn(){
       
        if(this.seesIdVisible('btnVasModalSkip')){
           cy.get('#btnVasModalSkip').click();
        }
    }
    seesLoctorWhichIamNotAbleToAccess(){
        if(this.doesNotseesDom('[name=proceedToRetailCheckout]')){
            cy.go(-1)}
            else{
                cy.go(-1)
            }
            
    }

    seesAddToCartBtnAgain(){
        if(this.seesClassVisibile('a-button-input')){
               cy.get('.a-button-input').click()
        }
    }
    seesQuantitiesAdded(){
        this.seesValueWithId('sc-subtotal-label-buybox','Subtotal (1 item):')
    }
    seesQuantityAddedInDropDown(){
        this.seesTextWithClass('a-dropdown-prompt','1')      
    }
    }


export class TodaysDealRobotHands extends BaseHands{
    clickOnThirdDeal(){
        this.clickOnDomElement('div.Grid-module__grid_1-xkdMK87Hfx0wjqVxAGcI >div:nth-of-type(3)')
    }

    // clickOnFirstDeal(){
    //     this.clickOnDomElement('div.Grid-module__grid_1-xkdMK87Hfx0wjqVxAGcI >div:nth-of-type(1)')
    // }
    clickOnFirstElementInsideThirdDeal(){
        this.clickOnDomElementWithTarget('#octopus-dlp-asin-stream>ul>li:first-of-type')
}
   clickOnAddToCartBtn(){
       this.clickOnId('add-to-cart-button')
   }
   

    clickOnProceedTobuy(){
        this.clickOnDomElement('[name=proceedToRetailCheckout]')
   }
}