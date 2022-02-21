package com.java.collections;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

public class ArrayListCLass {

    public static void main(String[]args){
        //Declare ArrayList
        ArrayList<Integer> al=new ArrayList<Integer>();
        ArrayList<String>all=new ArrayList<String>();
        List alls=new ArrayList();

        ArrayList any=new ArrayList();
        // add new elements to the arraylist
        any.add(100);
        any.add("johncena");
        any.add(true);
        any.add(45.5);

       int sizeinarray= any.size();
       System.out.println(sizeinarray);
       any.remove(1);//just pass the index and that index element will be removed

//inserting a new element and use add with index
        any.add(1,"premsai");
//retreive speciific elements
        any.get(1); //to get the index elements we can use this indexing
//to replace an element
        any.set(1,"Hulk");
 //search the element present in the array
        any.contains("johncena"); //this will retun bolean
//is empty
System.out.println(any.isEmpty())  ;

//how to read the data using forloop
        for (int i=0;i<any.size();i++){
           al.get(i);

        }

//how to read data using for.each loop

for (Object e:any){
    System.out.println(e);
}
//how to read data using iterator()
        Iterator it =any.iterator();
        while(it.hasNext()){
           System.out.println(it.next()); //it.next

        }





    }
}
