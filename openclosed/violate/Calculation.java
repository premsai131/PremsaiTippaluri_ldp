package com.principle.openclosed.violate;

public class Calculation implements Operation{
    @Override
    public  void addition(int a,int b) {
        int result =a+b;
        System.out.println("addition of "+a + "+" +b+" is >>"+result);

    }

    @Override
    public void subtraction(int a,int b) {
        int result =a-b;
        System.out.println("subtraction of "+a+"-"+b+" is >>"+result);
    }

    @Override
    public void multiplication(int a,int b) {
        int result =a*b;
        System.out.println(" subtraction of "+a+"*"+b+" is >>"+result);

    }
    //here i did some of the new enhancements in the original class it self which is not a best practice of open closed principle
    public void division(int a,int b){
        int result =a/b;
        System.out.println("addition of "+a + "/" +b+" is >>"+result);
    }
    public void volumecalulator(int a,int b,int c){
        int result =a*b*c;
        System.out.println("volume of "+a+"*"+b+"*"+c+" is >>"+result);
    }

    public static void main(String []args ){
       Calculation basiccal=new Calculation();

        basiccal.addition(5,10);
        basiccal.subtraction(25,10);
        basiccal.multiplication(15,10);
        basiccal.division(20,2);
        basiccal.volumecalulator(10,5,8);



    }
}




