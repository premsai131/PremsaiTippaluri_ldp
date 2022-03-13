package com.principle.singleresponsibility;

import java.util.Scanner;

public class MoneyTransfer {
    private static Scanner scan;
    private long Benificier_accnumber=1755101286;
    private int Transaction_password=12345678;
    private int balance=68000;

    public void transferMoney(long Benificier_accn,int Transaction_pword) {
        if (Benificier_accn == this.Benificier_accnumber && Transaction_pword == this.Transaction_password) {
            System.out.println("please enter the amount");
            scan = new Scanner(System.in);
            int amount = scan.nextInt();
            if (amount > 68000) {
                System.out.println("please enter amount lessthan 50000");
            } else if (amount <= 68000) {
                System.out.println(amount + " transfer successfullto >" + Benificier_accnumber);
            } else {
                System.out.println("please enter valid amount");
            }
        }
    }

public static void main(String []args){
MoneyTransfer transfer=new MoneyTransfer();
transfer.transferMoney(1755101286,12345678);
}
}