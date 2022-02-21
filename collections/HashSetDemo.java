package com.java.collections;

import java.util.HashSet;
import java.util.Iterator;

public class HashSetDemo {

    public static void main(String []args){
     //HashSet hs=new HashSetDemo();
        //HashSet hs=new HashSetDemo(100);
     //HashSet hs=new HashSet(100 ,(float)0.90);
     //HashSet <String> hs=new HashSet<String>();
        HashSet hs=new HashSet(); //default cpacity 16 load factor 0.75
      //Add objects/elements into HashSet
        hs.add(100);
        hs.add("prem");
        hs.add("true");
        hs.add(25.5);

        hs.contains(25.5);//return boolean
        hs.remove("prem");
        System.out.println(hs);

        hs.isEmpty();//it will return boolean

        //Reading elements or objects from HashSet using for.each

        for (Object e:hs){
            System.out.println(e);
        }

        //using iterator
        Iterator it =hs.iterator();
        while(it.hasNext()){
            System.out.println(it.next());

        }













     }



    }

