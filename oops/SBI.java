package com.java.oops;

public class SBI implements ReserveBank {
    @Override
    public void miniumBalance() {
        System.out.println("the minimum balance required in sbi is 2000/-");
    }

    @Override
    public void deposit() {
        System.out.println("the maximum deposit you can do a once is 10000/-");

    }

    @Override
    public void interestrate() {
        System.out.println("the interest rate here in sbi is 4%");

    }
    public void extraCharges(){
        System.out.println("the charges here in sbi are too High");
    }


    public static void main(String[] args) {
        SBI sbi =new SBI();
        sbi.miniumBalance();
        sbi.interestrate();
        sbi.deposit();
        sbi.extraCharges(); //own method

        ReserveBank reserve =new SBI(); ////////////////////
         reserve.miniumBalance();
         reserve.deposit();
         reserve.interestrate();





    }
}
