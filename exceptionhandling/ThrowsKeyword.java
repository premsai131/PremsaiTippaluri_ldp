package com.java.exceptionhandling;

public class ThrowsKeyword {


    public void sum() throws ArithmeticException{
        int a=40+9/0;

    }

    public static  void main(String[]args)throws ArithmeticException{

      ThrowsKeyword obj =new ThrowsKeyword();

      obj.sum();
      System.out.println("the");
 //throws keyword will terminate
        }





    }




