package com.principle.liskovsubstitution;

public class KiaSeltos implements CarEngine,CarBrakes,CarAcceleration {
    @Override
    public void engine() {
        System.out.println("this car has engine and runs on petrol");
    }
    @Override
    public void acceleration() {
        System.out.println("this car has an acceleration speed of 45km in 5 seconds");

    }
    @Override
    public void brakes() {
        System.out.println("this car can apply brakes");

    }


    public static void main(String[] args){
        KiaSeltos seltos =new KiaSeltos();

        seltos.engine();



    }


}
