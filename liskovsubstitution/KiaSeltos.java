package com.principle.liskovsubstitution;

public class KiaSeltos extends Car {
    @Override
    public void engine() {
        System.out.println("this car has engine and runs on petrol");
    }
    @Override
    public void acceleration() {
        System.out.println("this car has an acceleration speed of 60km in 5 seconds");
    }

    @Override
    public void applyBrakes() {
        System.out.println("this car can apply brakes");
    }

    public static void main(String[] args){
        KiaSeltos seltos =new KiaSeltos();

        seltos.engine();
        seltos.acceleration();
        seltos.applyBrakes();


    }


}
