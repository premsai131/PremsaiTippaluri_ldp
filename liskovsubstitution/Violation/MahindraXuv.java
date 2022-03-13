package com.principle.liskovsubstitution.Violation;

public class MahindraXuv extends ElectricCar {

    @Override
    public void electricMortor() { //theres no point of implementing this method

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
        xuv500.acceleration();
        xuv500.applyBrakes();


    }


}
