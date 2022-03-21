import { BaseHands,BaseEyes } from "../robot/BaseRobot";

/*
Basically this class which checks weather the adding a new payment option is available or not */

export class PayementsOptionRobotEyes extends BaseEyes{
      visibilityOfPaymentsOptionBtn(){
          this.seesDomVisible('[data-card-identifier=PaymentOptions]')
      }

      visibilityOfManageBankAccountsBtn(){
          this.seesDomContainText('[data-testid=cpe-mpo-Nav-BankAccount]','Manage Bank Accounts')
      }
      visibilityOfAddNewBankAccountLink(){
          this.seesDomContainText('a>span.a-size-base','Add a New Bank Account')
      }

}

export class PaymentsOptionRobotHands extends BaseHands{
    clickOnPaymentsOptionBtn(){
        this.clickOnDomElement('[data-card-identifier=PaymentOptions]')
    }
    clickOnManageBankAccountsBtn(){
        this.clickOnDomElement('[data-testid=cpe-mpo-Nav-BankAccount]')
}
}

