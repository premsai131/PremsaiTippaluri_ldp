package com.principle.liskovsubstitution;

public class TataNano extends Car{
    @Override
    public void engine() {
        System.out.println("this car has engine and runs on petrol");
    }
    @Override
    public void acceleration() {
        System.out.println("this car has an acceleration speed of 35km in 5 seconds");
    }

    @Override
    public void applyBrakes() {
        System.out.println("this car can apply brakes");
    }

    public static void main(String []args){

        TataNano nano=new TataNano();

        nano.engine();
        nano.acceleration();
        nano.applyBrakes();


    }



}
