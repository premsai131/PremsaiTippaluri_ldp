package com.java.exceptionhandling;

public class NestedTry {


    public static void main(String[]args){
        try {
            System.out.println("123");
            try {
                System.out.println(9 / 0);
            } catch (ArithmeticException e) {
                e.printStackTrace();
            }
        System.out.println("try statement 3");
        }
        catch(Exception e) {
            e.printStackTrace();
        }
        finally {
            System.out.println("terminated successfully");
            }
        }


    }

