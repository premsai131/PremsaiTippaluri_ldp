import { BaseEyes, BaseHands } from "../robot/BaseRobot";
import { RobotEyes, RobotHands } from "./HomePage";


/*THIS PAGE IS FOR GETTING THE EXPECTED DELIVERY DATE OF THE PRODUCT INSIDE THE CART */

export class YourAccountsPageRobotEyes extends RobotEyes{
    visibilityOfPrimeButton(){
        this.seesDomVisible('[data-card-identifier=Prime]')
    }

}

export class YourAccountsPageRobotHands extends RobotHands{
    gettingTheExpectedDeliveryDateOfProduct(){
        this.clickOnDomElement('[data-card-identifier=Prime]')
        cy.scrollTo('topRight')
        this.clickOnDomElement('#sc-item-C7e7d73f9-d142-48b3-89a3-8338b5442c90 > .ewc-item-content > span.a-declarative > .a-row > .a-link-normal > .sc-product-image')
        cy.get('#mir-layout-DELIVERY_BLOCK>div>b').then(function(deliveryDate){
          cy.log(deliveryDate.text())
        })

    }
}