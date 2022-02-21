package com.principle.interfaceseggregation;

public class Epson implements BasicPrinter {
    @Override
    public void xerox() {
        System.out.println("This Epson printer can perform xerox operation");

    }

    @Override
    public void print() {
        System.out.println("This Epson printer can perform print operation");
    }

    @Override
    public void scanner() {
        System.out.println("This Epson printer can perfrom scsnning operation");

    }
    public static void main (String []args){
        Epson laserJet=new Epson();

        laserJet.xerox();
        laserJet.print();
        laserJet.scanner();

    }
}
