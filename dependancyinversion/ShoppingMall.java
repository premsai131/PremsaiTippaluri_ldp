package com.principle.dependancyinversion;

public class ShoppingMall {

    private static BankCard bankcard;

//    private ShoppingMall(BankCard bankcard){
//        this.bankcard=bankcard;
//    }

    private void doshopping(long amount){
        bankcard.doPayment(amount);

    }
    public static  void main(String []args){
        BankCard bankcard =new DebitCards();//dynamic polymorphism or run time polymorphism child object being reffered by parent obj
        //by using this we make this dynamic and only dependant on th interface
        ShoppingMall shopping =new ShoppingMall();
        shopping.doshopping(20000);
    }



}
