package com.java.selenium;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.concurrent.TimeUnit;

public class Synchnronization {
    static WebDriver driver;

    public static void main(String[] args) {
        System.setProperty("webdriver.chrome.driver", "D:\\Selenium\\chromedriver_win32\\chromedriver.exe");
        driver =new ChromeDriver();
        driver.get("https://www.rediff.com/");
        driver.manage().window().maximize();
        driver.manage().timeouts().pageLoadTimeout(15, TimeUnit.SECONDS);
        driver.manage().timeouts().implicitlyWait(4, TimeUnit.SECONDS);////
        driver.manage().deleteAllCookies();

        driver.findElement(By.xpath("//a[@class=\"vdicon\"]")).click();
        ///now i use Explicit wait for one specific element
       WebElement image= driver.findElement(By.xpath("//a[contains(text(),'Akshay Kumar')]"));
        WebDriverWait myWait=new WebDriverWait(driver,10);
        myWait.until(ExpectedConditions.visibilityOf(image));
        image.click();







    }
}
