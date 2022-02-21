package com.principle.dependancyinversion;

public class DebitCards implements BankCard {

    public void doPayment(long amount){
        System.out.println("Payment made through debit card");


    }


}
