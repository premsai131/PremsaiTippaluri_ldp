package com.principle.openclosed;

public class Advancedcalculator extends BasicCalculator {

    public void division(int a,int b){
        int result =a/b;
        System.out.println("addition of "+a + "/" +b+" is>>"+result);
    }
    public void volumecalulator(int a,int b,int c){
        int result =a*b*c;
        System.out.println("volume of "+a+"*"+b+"*"+c+" is>>"+result);
    }
public static void main(String []args){
        //here i can do basic calculator operations as well as advanced calculator operations
    // just by creating the object with the instance of advanced calculator

    Advancedcalculator advcal=new Advancedcalculator();

//    advcal.addition(5,60);
//    advcal.subtraction(10,6);
//    advcal.multiplication(15,22);
    advcal.division(10,2);
    advcal.volumecalulator(10,2,2);



}


}
