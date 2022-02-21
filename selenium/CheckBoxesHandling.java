package com.java.selenium;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import java.util.List;
import java.util.concurrent.TimeUnit;

public class CheckBoxesHandling extends DynamicDropDown{

    public static void main(String []args) throws InterruptedException {
        System.setProperty("webdriver.chrome.driver", "D:\\Selenium\\chromedriver_win32\\chromedriver.exe");
        driver = new ChromeDriver(); // i dont need to create object reference again because inherited

        driver.get("https://www.irctc.co.in/nget/train-search");
        driver.manage().window().maximize();
        driver.manage().timeouts().pageLoadTimeout(15,TimeUnit.SECONDS);
        driver.manage().timeouts().implicitlyWait(4, TimeUnit.SECONDS);
        driver.manage().deleteAllCookies();

//        Alert alert=driver.switchTo().alert();
//        alert.accept();

//        driver.findElement(By.xpath("//button[contains(text(),'OK')]").click();
        driver.findElement(By.xpath("//button[contains(text(),'OK')]")).click();

       List<WebElement> checkbox= driver.findElements(By.xpath("//div//span//label"));
       System.out.println(checkbox.size());
       for (int i=0; i<checkbox.size();i++){
           System.out.println(checkbox.get(i).getText()+" and is it is displaying on webpage "+checkbox.get(i).isDisplayed());
           System.out.println(checkbox.get(i).isEnabled()+">> element is in enabeled state"); //it shpuld return true
           System.out.println(checkbox.get(i).isSelected()+">> element is not still selected"); //it should return false

       }
       Thread.sleep(3000);
       driver.findElement(By.xpath("//label[contains(text(),'Train with Available Berth')]")).click();

       //now i need to check weather the element is selected or not

        boolean elementStatus=driver.findElement(By.xpath("//label[contains(text(),'Train with Available Berth')]")).isSelected();
        System.out.println(elementStatus);
        if(elementStatus==true) {
            System.out.println("the required option is selected");
        }else{
            System.out.println("the required option is not clicked");
        }
        //now i need to get the elements which are not selected
        //driver.findElement(By.xpath("//label[contains(text(),'Train with Available Berth')]")).click();
        List<WebElement> checkBox=driver.findElements(By.xpath("//div//span//label"));  //this is having a problem
        for(WebElement e:checkBox){
            if(e.isSelected()!=true){ //which ever the elements are not selected that will printed on the console
                System.out.println(e.getText()+"this element not selected");
            }
            else {
                System.out.println(e.getText()+" this element gottt selected");
            }
        }




    }

}