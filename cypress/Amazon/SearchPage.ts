import { BaseEyes,BaseHands } from "../robot/BaseRobot";


/*THIS PAGE FOR SEARCHING FOR MOBILES IN SEARCH BOX AND GETTING THE DETAILS OF LAST DISPLAYED MOBILE */


export class SearchMobiles  extends BaseHands {
    searchForMobiles(){
        this.typeTextonId('twotabsearchtextbox','Mobiles')
        this.clickOnId('nav-search-submit-button')
    }
    // clickOnLastDisplayedMobiles(){
    //     //div[cel_widget_id=MAIN-SEARCH_RESULTS-22]  //use this incase if below one doesnt works
    //     //this.clickOnDomElementWithTarget('div[cel_widget_id=MAIN-SEARCH_RESULTS-22]')
    //     cy.get('div[cel_widget_id=MAIN-SEARCH_RESULTS-22]').click()
    // }
    // getTheTextOFLastDisplayedMobile(){

    //     var itemDetails
    //     itemDetails=this
    //         itemDetails=data.text();
    //         cy.log(itemDetails);
    //     })
}
export class GetTheDeailsOFMobile extends BaseEyes{

    getTheTextOFLastDisplayedMobile(){
      cy.get('[cel_widget_id=MAIN-SEARCH_RESULTS-22]').scrollIntoView();
      cy.get('[cel_widget_id=MAIN-SEARCH_RESULTS-22] h2 a:last-of-type>span').then((data)=>{
        var details=data.text();
        cy.log(details);
        
                
      })
    }
  }   
   

