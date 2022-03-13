package com.principle.dependancyinversion.violation;

public class CreditCard {

    public void doPayment(long amount){
        System.out.println("Payemnt made through debit card");
    }
}
