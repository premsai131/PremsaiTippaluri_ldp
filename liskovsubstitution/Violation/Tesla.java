package com.principle.liskovsubstitution.Violation;

public class Tesla extends ElectricCar {
    @Override
    public void electricMortor() {
        System.out.println("This car runs with electricity");

    }


    @Override
    public void acceleration() {
        System.out.println("This car has an acceleration speed of 80km in 5 seconds");

    }

    @Override
    public void applyBrakes() {
        System.out.println("this car can apply brakes");

    }
    public static void main (String []args){
        ElectricCar roadster =new Tesla();
        roadster.electricMortor();
        roadster.acceleration();
        roadster.applyBrakes();


    }


}
