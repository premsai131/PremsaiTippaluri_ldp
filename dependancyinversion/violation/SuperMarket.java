package com.principle.dependancyinversion.violation;

public class SuperMarket {
    private static DebitCard debit_card;

//    public SuperMarket(DebitCard debit_card){
//        this.debit_card=debit_card;
//    }
    public void purchase_Something(long amount){
        debit_card.doPayment(amount);

    }
public static void main(String[] args){
         debit_card =new DebitCard();
        //if user wants to make payment through credit card then you have keep on changing the constructor paramter and
    //change the object here to creditcard etc.. now it is being tightly couped and dependant on each other
        SuperMarket market=new SuperMarket();
        market.purchase_Something(25000);



}




}
