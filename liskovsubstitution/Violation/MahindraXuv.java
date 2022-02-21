package com.principle.liskovsubstitution.Violation;

public class MahindraXuv extends ElectricCar {

    @Override
    public void electricMortor() {
        /*this mahindra Xuv runs on engine not on electric and but has two functionalities like
        acceleration and apply brakes but dodnot have electric mortor but just to implement those two
        undefined methods i had to implement this electric mortor method also because interface wont allow you
        to implment only few of it undefind methods.
        here unnecessarily readability is decreasing because of this process so this is not a best practice
        of inheritance
         */

    }

    @Override
    public void acceleration() {
        System.out.println("This car has an acceleration speed of 65km in 5 seconds");

    }

    @Override
    public void applyBrakes() {

        System.out.println("This car can apply brakes");

    }
    public static void main(String []args){
        MahindraXuv xuv500=new MahindraXuv();


        /*xuv500.electricMortor(); here iam not calling this method but still have to inherit it and implement
        just beacuse i need these two methods called acceleration and apply brakes
         */

        xuv500.acceleration();
        xuv500.applyBrakes();


    }


}
