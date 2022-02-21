package com.principle.singleresponsibility.violation;

import java.util.Scanner;

public class Hdfc {
    private static String username;
    private static String password;
    //here this class has two responsibilities like login and money transfer which is actually breaking this SRP

    // these global variables are related to moneytranfer
    private static Scanner scan;
    private long Benificier_accnumber=1755101286;
    private int Transaction_password=12345678;
    private int balanceAvailable=68000;

    public Hdfc(String username, String password) {
        this.username=username;
        this.password=password;
    }

    public void loginFeature(String uname, String pswrd) {
        if (uname == username && pswrd == password) {

            System.out.println("Login successfull");
        } else {
            System.out.println("invalid creditentials please enter valid user name and password");
        }

    }
    public void transferMoney(long Benificier_accn,int Transaction_pword) {
        if (Benificier_accn == this.Benificier_accnumber && Transaction_pword == this.Transaction_password) {
            System.out.println("please enter the amount");
            scan = new Scanner(System.in);
            int amount = scan.nextInt();
            if (amount > balanceAvailable) {
                System.out.println("please enter amount lessthan 50000");
            } else if (amount <= balanceAvailable) {
                System.out.println(amount + " transfer successfullto >>>" + Benificier_accnumber);
            } else {
                System.out.println("please enter valid amount");
            }
        }
    }

    public static void main(String[] args) {

        Hdfc Hdfc_user = new Hdfc("premsai", "premsai123");
       Hdfc_user.loginFeature("premsai", "premsai123");

        Hdfc_user.transferMoney(1755101286,12345678);

    }
}



