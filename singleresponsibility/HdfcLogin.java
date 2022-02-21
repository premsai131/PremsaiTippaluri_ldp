package com.principle.singleresponsibility;

public class HdfcLogin {
    private static String username;
    private static String password;

    public HdfcLogin(String username, String password) {
        this.username=username;//this will intialize global varialbe with local variable username
        this.password=password;// this will intilaize the global variable with loal variable password
    }

    public void loginFeature(String uname, String pswrd) {
        if (uname == username && pswrd == password) {

            System.out.println("Login successfull");
        } else {
            System.out.println("invalid creditentials please enter valid user name and password");
        }

    }

    public static void main(String[] args) {

        HdfcLogin userLogin = new HdfcLogin("premsai", "premsai123");
        userLogin.loginFeature("premsai", "premsai123");


    }
}


