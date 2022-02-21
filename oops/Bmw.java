package com.java.oops;

public class Bmw extends Car {  //establishing has a relationship
    //over ridden methods
    public void start() {
        System.out.println("this is a start method from child class");
    }

    public void stop() {
        System.out.println("this is a stop method from child class");
    }

    public void run() {
        System.out.println("this is a run method from child class");
    }

    //own methods
    public void autoPilot() {
        System.out.println("this is a autoPilot method from child class");
    }

    public void airBags() {
        System.out.println("this is a airbags method from childclass");
    }

    public static void main(String[] args) {

        Bmw x7 = new Bmw();
        x7.start(); //own method will be called
        x7.stop();
        x7.run();
        x7.airBags();
        x7.autoPilot();
        //////////////////////
        Car maruthi800 = new Car();
        maruthi800.start(); //parent method will be called
        maruthi800.stop();
        maruthi800.run();
       // maruthi800.airBags(); ///this maruthi 800 cannot access the child class method

        Car volksWagen =new Bmw();
        volksWagen.start();//this is dynamic
        volksWagen.stop();
        volksWagen.run();




    }
}



