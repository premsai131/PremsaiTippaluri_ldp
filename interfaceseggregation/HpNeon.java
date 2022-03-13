package com.principle.interfaceseggregation;

public class HpNeon implements BasicPrinter, AdvancedPrinter {
     /*this is the best practice when you are following agile proccess like incremental approach
       because for every sprint you add new functionalities for already developed code.

      */
    @Override
    public void xerox() {
        System.out.println("This Hp_Neon printer can perform xerox operation");

    }

    @Override
    public void print() {
        System.out.println("This Hp_Neon printer can perform print operation");
    }

    @Override
    public void scanner() {
        System.out.println("This Hp_Neon printer can perfrom scsnning operation");

    }

    @Override
    public void fax() {
        System.out.println(">>>>>This Hp_Neon printer can perform fax operation<<<<");

    }

    @Override
    public void internetConnection() {
        System.out.println(">>>>>This Hp_Neon printer have internet connection feature<<<<<");

    }
    public static void main (String []args){
    HpNeon inkjet240=new HpNeon();

    inkjet240.xerox();
    inkjet240.print();
    inkjet240.scanner();
    inkjet240.fax();
    inkjet240.internetConnection();

    }
}
