package com.java.oops;

public class MethodOverloading {

    private int studentId=1234;
    private int stduentHallTicket =1322119656;
   private String studentName="john wick";
   private String studentCourse="CivilEngineering";
   private String studentCollege="university of Manchester";

    private void studentDetails(int id) {
        if (this.studentId == id) {
            System.out.println("student details : "+this.studentName + ", id is: " + this.studentId + ", course: " + this.studentCourse + ",college:  " + this.studentCollege);
        } else {
            System.out.println("please enter valid student details");
        }
    }
    private void studentDetals(String nameOfStudent){
            if (this.studentName==nameOfStudent) {
                System.out.println(this.studentName + " " + this.studentId + " " + this.studentCourse + " " + this.studentCollege);
            }
            else{
                System.out.println("please enter valid student details");

        }
    }

    private void studentDetails(String nameOfStudent, int id){
        System.out.println(this.studentName + " " + this.studentId + " " + this.studentCourse + " " + this.studentCollege);


    }

    public void studentData(){
        this.studentDetails(1234);
        this.studentDetals("john wick");
        this.studentDetails("john wick",1234);

    }

}
