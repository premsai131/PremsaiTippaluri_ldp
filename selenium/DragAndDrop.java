package com.java.selenium;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import java.util.concurrent.TimeUnit;

public class DragAndDrop {
    static WebDriver driver;

    public static void main(String[] args) {

        System.setProperty("webdriver.chrome.driver", "D:\\Selenium\\chromedriver_win32\\chromedriver.exe");
        driver =new ChromeDriver();
        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
        driver.get("https://www.globalsqa.com/demo-site/draganddrop/");

        //now we have a fram in this winow shift the control to the the frame and perform certain opration on th elements
        driver.switchTo().frame(driver.findElement(By.xpath("//body/div[@id='wrapper']/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/p[1]/iframe[1]")));

        WebElement sourceimg1=driver.findElement(By.xpath("(//img)[1]"));
        WebElement sourceimg2=driver.findElement(By.xpath("//h5[contains(text(),'High Tatras 2')]"));
        WebElement sourceimg3=driver.findElement(By.xpath("//h5[contains(text(),'High Tatras 3')]"));
        WebElement sourceimg4=driver.findElement(By.xpath("//h5[contains(text(),'High Tatras 4')]"));

        //h5[contains(text(),"High Tatras 2")]

        WebElement target=driver.findElement(By.xpath("//span[@class='ui-icon ui-icon-trash']"));

        Actions action = new Actions(driver);
       // for(int i=1;i<=4;i++){

        action.clickAndHold(sourceimg1).moveToElement(target).release().build().perform(); //for drag and drop
        action.clickAndHold(sourceimg2).moveToElement(target).release().build().perform();
        action.clickAndHold(sourceimg3).moveToElement(target).release().build().perform();
        action.clickAndHold(sourceimg4).moveToElement(target).release().build().perform();



    }
}
