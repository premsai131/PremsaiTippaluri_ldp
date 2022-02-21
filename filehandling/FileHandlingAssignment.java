package com.java.filehandling;

import java.io.*;
import java.util.Scanner;

public class FileHandlingAssignment {
    private static File file1; // i dont to make them visibile outside the class so put them in private
    private static FileWriter fw;
    private static FileReader fileread;

    ////////////////////////////////////////////
    public  void createFile(String path) throws IOException { //a method for creating a file in the local
        file1 = new File(path);

        boolean b = file1.createNewFile();

        if (b == true) {
            System.out.println("New file with name samplefile got created ");
        } else {
            System.out.println("file name already exists or file not created due to some reasons");
        }

    }

    public  void writeIntoFile(String path, boolean a) throws IOException { //a method for writing data in to the created file
        fw = new FileWriter(path, a); //here aim appending the data
        Scanner scan = new Scanner(System.in);
        System.out.println(" ");
        System.out.println("please enter some data to the file");
        String data = scan.nextLine();
        fw.write(data);
        System.out.println("written data got added successfully");
        fw.close(); //after writing into the file i'm just closing the file
    }

    public void readingTheFile(String path) throws IOException { //a method for reading the data from the file
        fileread = new FileReader(path);
        int c = 0;
        while ((c = fileread.read()) != -1) {
            System.out.print((char) c);
        }
    }

    public void  getfileInfo() {  //for getting the file info detials
        System.out.println("file is in>>"+file1.getAbsoluteFile());

    }

    public static void main(String[] args) throws IOException {


        FileHandlingAssignment filehandle=new FileHandlingAssignment();
        filehandle.createFile("D:\\FileHandling\\sample1.txt");
        filehandle.readingTheFile("d:\\FileHandling\\sample1.txt");
        filehandle.writeIntoFile("d:\\FileHandling\\sample1.txt",true); //second parameter for appending the data if there is any existing data avaliabel
        filehandle.getfileInfo();
        }
    }

