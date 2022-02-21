package com.java.collections;

import java.util.ArrayList;
import java.util.Collections;

public class Homogenious {

    public static void main (String[]args){

        ArrayList al =new ArrayList();
         al.add("x");
         al.add("y");
         al.add("a");
         al.add("c");
         al.add("z");

         ArrayList al_dup=new ArrayList();
         al_dup.addAll(al);
         al_dup.removeAll(al);
         //sorting an arraylist we have method in collections
        Collections.sort(al);
        System.out.println(al);
//sorting of an arraylist by reverse order
        Collections.sort(al,Collections.reverseOrder());
        System.out.println(al);
        //shuffling-Collections.Shuffle()

        Collections.shuffle(al);
        ArrayList<Object> arrs=new ArrayList<Object>();






    }
}
