package com.principle.interfaceseggregation.violation;

public class Cannon implements printer{

    //this cannon printer funtions only three basic operations
    @Override
    public void xerox() {
        System.out.println("This cannon printer can perform xerox operation");
    }

    @Override
    public void print() {
        System.out.println("This cannon printer can perform print operation");
    }
    @Override
    public void scanner() {
        System.out.println("This Epson printer can perfrom scsnning operation");

    }
    @Override
    public void fax() {
       //cannon really dont need this method because this printer dont support this fax operation but still it had to implement this

    }

    @Override
    public void internetConnection() {
        //cannon really dont need this method because this printer dont support this fax operation but still it had to implement this

    }
    public static void main(String []args){
    Cannon laserJet =new Cannon();
        laserJet.xerox();
        laserJet.print();
        laserJet.scanner();

    }
}


















