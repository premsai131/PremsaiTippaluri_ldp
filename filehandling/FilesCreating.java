package com.java.filehandling;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Scanner;

public class FilesCreating {



    public static void main(String[]args){
  //1.using file:
        File file =new File("D:\\udemy sample backup\\sample.txt");
        try{
            boolean b= file.createNewFile();
            if(b==true){
                System.out.println("file got created");
            }
            else{
                System.out.println("file not created");
            }
        } catch (IOException e) {
            e.printStackTrace();
        }

        //2.FileOutputStream along with scanner: and writing data into the file using write
        Scanner sc=new Scanner(System.in);
        System.out.println("enter the file name");
       String fileName= sc.nextLine();

        try {
            FileOutputStream fos=new FileOutputStream(fileName);
        System.out.println("enter the file content:");
        String content=sc.nextLine();
        byte b[]=content.getBytes();

        fos.write(b);
        fos.close();
        System.out.println("File is saved in ");



    }catch (Exception e){
            e.printStackTrace();
        }

        }
}
