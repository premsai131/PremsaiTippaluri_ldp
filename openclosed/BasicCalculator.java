package com.principle.openclosed;

public class BasicCalculator implements Calculator{


    @Override
    public  void addition(int a,int b) {
        int result =a+b;
        System.out.println("addition of "+a + "+" +b+" is>>"+result);

    }

    @Override
    public void subtraction(int a,int b) {
        int result =a-b;
        System.out.println("subtraction of "+a+"-"+b+" is>>"+result);
    }

    @Override
    public void multiplication(int a,int b) {
        int result =a*b;
        System.out.println(" subtraction of "+a+"*"+b+" is>>"+result);

    }

    public static void main(String []args ){
        BasicCalculator basiccal=new BasicCalculator();

        basiccal.addition(5,10);
        basiccal.subtraction(25,10);
        basiccal.multiplication(15,10);



    }
}
