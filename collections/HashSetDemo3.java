package com.java.collections;

import java.util.HashSet;

public class HashSetDemo3 {

    public static void main(String[]args){
        //union //intersection //difference

        HashSet<Integer> set1=new HashSet<Integer>();
        set1.add(1);
        set1.add(2);
        set1.add(3);
        set1.add(4);

        System.out.println(set1);

        HashSet<Integer>set2 =new HashSet<Integer>();
        set2.add(4);
        set2.add(5);
        set2.add(6);
        set2.add(7);
        set2.add(8);

        set1.addAll(set1);
        System.out.println("union"+set1);

        //for intersection
        set1.retainAll(set2); //only common elements will be printed here
        System.out.println(set1);
        //to find the difference of two sets common elements will be removed from set1 and unique will be displayed
        set1.removeAll(set2);
        System.out.println(set1);

        //subset elements




    }
}
