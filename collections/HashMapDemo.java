package com.java.collections;

import java.util.HashMap;

public class HashMapDemo {

    public static void main(String[]args){
        HashMap m=new HashMap(); //duplicates not allowed entries order not preserved
        m.put(101,"david warner");
        m.put(102,"rishabpant");
        m.put(103,"prithvi shah");
        m.put(104,"mitchel marsh");
        m.put(105,"shardul thakur");
        m.put(105,"privthi shaw"); //now the key is duplicate and oldvalue will be updated with new value
        m.put(106,"david warner"); //here values can be duplicate
        System.out.println(m);

        System.out.println(m.get(102)); //to get the value using key
        m.remove(105); //now both original and duplicate will be deletd

        System.out.println(m);
        System.out.println(m.containsKey(104)); //returns booleon
        System.out.println(m.isEmpty());//returns boolean
        System.out.println(m.keySet()); //returns all the keys as set beacuse keys will not have duplicates and set can store keys

        System.out.println(m.values()); //returns in the from of collections because this values may contains duplicates and set cannot have diuplicates

        //how to read all the keys using for.each loop

        for (Object e:m.keySet()){
            System.out.println("keys are"+e);
        }
        //how to read all the values using for.each loop
        for(Object e:m.values()){
            System.out.println( "values"+e);

        }
        //to  retreive the keys and value pairs

        for(Object e:m.keySet()){
            System.out.println(e+" value is :"+m.get(e));


        }





    }
}
