package com.principle.dependancyinversion.violation;

public class SuperMarket {
    private static DebitCard debit_card;


    public void purchase_Something(long amount){
        debit_card.doPayment(amount);

    }
public static void main(String[] args){
         debit_card =new DebitCard();

        SuperMarket market=new SuperMarket();
        market.purchase_Something(25000);



}




}
