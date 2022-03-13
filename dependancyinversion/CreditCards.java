package com.principle.dependancyinversion;

public class CreditCards implements BankCard {

    public void doPayment(long amount){

        System.out.println("Payemnt made through credit card");
    }
}
