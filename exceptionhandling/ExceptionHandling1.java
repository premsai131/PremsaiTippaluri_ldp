package com.java.exceptionhandling;

public class ExceptionHandling1 {
    //int a=10;

    public static void main(String[]args){
//        int i=9/0; //uncaught exception
//        System.out.println(i);

        //caught exception
        //Thread.sleep(2000);

        //int a=10;

//        ExceptionHandling1 obj=new ExceptionHandling1();
//        obj=null;
//        System.out.println(obj.a);

        //1.try -catch block;
        try{
            int i=9/0; //suspected code
        }catch( ArithmeticException e){
            e.printStackTrace(); //exception can be caught
        }
        System.out.println("abc");
        System.out.println("hero");


    }
}
