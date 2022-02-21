package com.java.selenium;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import java.util.concurrent.TimeUnit;

public class MouseOverActions {

    static WebDriver driver;

    public static void main(String[] args) throws InterruptedException {
        System.setProperty("webdriver.chrome.driver", "D:\\Selenium\\chromedriver_win32\\chromedriver.exe");
        driver =new ChromeDriver();
        driver.get("https://www.spicejet.com/");
        driver.manage().window().maximize();
        driver.manage().timeouts().pageLoadTimeout(15, TimeUnit.SECONDS);
        driver.manage().timeouts().implicitlyWait(4, TimeUnit.SECONDS);
        driver.manage().deleteAllCookies();

        Actions action=new Actions(driver);

        action.moveToElement(driver.findElement(By.xpath("//div[text()=\"Add-ons\"]"))).build().perform();
        Thread.sleep(1000);
        driver.findElement(By.xpath("//div[contains(text(),\"Senior Citizen Discount\")]")).click();
        //Thread.sleep(1000);
//        driver.getWindowHandles();
//        driver.switchTo().window()
//        driver.findElement(By.xpath("//a[@id=\"highlight-gift-card\"]")).click();




    }

}
