package com.java.filehandling;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;

public class FileInputstrem {

    public static void main(String []args){
        String path="D:\\trainingrepository\\selenium.txt";

        File file=new File(path);

        try {
            FileInputStream files = new FileInputStream(file);
            System.out.println("the name content is :");
            int c = 0;
            while ((c = files.read()) != -1) {
                System.out.print((char) c); //if you are not using char then it will return haskey values
            }
        } catch (Exception e) {
            e.printStackTrace();
        }


    }
}
