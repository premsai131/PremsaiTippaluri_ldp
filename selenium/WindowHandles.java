package com.java.selenium;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.BeforeClass;

import java.util.Iterator;
import java.util.Set;
import java.util.concurrent.TimeUnit;

public class WindowHandles {

   static WebDriver driver;

    public static void main(String[] args) throws InterruptedException {
        System.setProperty("webdriver.chrome.driver", "D:\\Selenium\\chromedriver_win32\\chromedriver.exe");
        driver=new ChromeDriver();

        driver.manage().window().maximize();
        driver.get("https://www.hyrtutorials.com/p/window-handles-practice.html");
        driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);

        driver.findElement(By.xpath("//button[@id=\"newWindowBtn\"]")).click();


       Set<String>ids= driver.getWindowHandles();
        Iterator<String> it=ids.iterator();

        String mainWindow=it.next();
        String childWindow1=it.next();

        driver.findElement(By.xpath("//button[@id=\"newWindowBtn\"]")).click();

        System.out.println(mainWindow);
        System.out.println(childWindow1);
        //System.out.println(childWindow2);

        driver.switchTo().window(childWindow1);  //switching to childwindow and perform certain opertaion
        driver.manage().window().maximize();
        driver.findElement(By.xpath("//input[@id='firstName']")).sendKeys("premsai");
        Thread.sleep(2000);
        driver.close();

        driver.switchTo().window(mainWindow);
        Thread.sleep(2000);

        ///for performing scrolling actions we actually use javaScript executr and cast it to driver object
        JavascriptExecutor js=((JavascriptExecutor)driver);
       js.executeScript("scroll(0,400)"); //for scrolling  //horizontal scrolling and verical scrolling can be performed

    }

}
