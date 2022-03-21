
import { BaseEyes,BaseHands } from "../robot/BaseRobot";



export class DeliveryAddressRobotHands extends BaseHands{
    addNewDeliveryAddress(countryName:string,fullName:string,mobileNumber:any,pinCode:any,flatNo:any,area:string,landMark:string,state:string,addressType:string){
        this.clickOnId('nav-link-accountList')
        this.clickOnDomElement('[data-card-identifier="AddressesAnd1Click"]')
        this.clickOnId('ya-myab-plus-address-icon')
        var country:any
        cy.get('#address-ui-widgets-countryCode-dropdown-nativeId>option').each((element)=>{

           country=element.text();
           cy.log(" >"+country+" > ")
           if(country===countryName){
               cy.get('#address-ui-widgets-countryCode-dropdown-nativeId').select(countryName,{force: true})
           }
        })
      
        this.typeTextonId('address-ui-widgets-enterAddressFullName',fullName)  
        this.typeTextonId('address-ui-widgets-enterAddressPhoneNumber',mobileNumber)
        this.typeTextonId('address-ui-widgets-enterAddressPostalCode',pinCode)
        this.typeTextonId('address-ui-widgets-enterAddressLine1',flatNo)
        this.typeTextonId('address-ui-widgets-enterAddressLine2',area)
        this.typeTextonId('address-ui-widgets-landmark',landMark)
        var stateName:any
        cy.get('#address-ui-widgets-enterAddressStateOrRegion-dropdown-nativeId>option').each((element,index)=>{
            stateName=element.text()
            cy.log(stateName)
        })
                cy.get('#address-ui-widgets-enterAddressStateOrRegion').click()
                cy.get('#address-ui-widgets-enterAddressStateOrRegion-dropdown-nativeId_1').click()
        
        
        var address:any
        cy.get('select[name="address-ui-widgets-addr-details-address-type-and-business-hours"]>option').each((element,index)=>{
           address=element.text()
           cy.log(address)
        })
            cy.get('#address-ui-widgets-addr-details-address-type-and-business-hours').click()
            cy.get('#a-popover-4 #dropdown1_1').click()
        
           
        }

    }


