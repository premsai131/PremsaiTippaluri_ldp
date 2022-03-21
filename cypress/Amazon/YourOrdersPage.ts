import { BaseEyes,BaseHands } from "../robot/BaseRobot";



/*THIS PAGE IS FOR SHOWING THE PAST ONE YEAR ORDERS */
export class YourOrdersPageRobotEyes extends BaseEyes{
    visibilityOfYourOrdersBtn(){
        this.seesDomVisible('[data-card-identifier=YourOrders]')
    }
    visibilityOfYourOrdersPage(){
        this.seesDomContainText('h1.a-spacing-medium','Your Orders')
    }
}

export class YourOrdersPageRobotHands extends BaseHands{
    getThePastOneYearOrders(){
        this.clickOnDomElement('[data-card-identifier=YourOrders]')  //for clicking on the your oders button
        cy.get('[name="orderFilter"]>option').each((element)=>{
         cy.log(element.text())
        })
        cy.get('[name=orderFilter]').select('year-2021',{force: true})
        cy.get('div#ordersContainer>div:nth-of-type(11)').scrollIntoView();
    }
}