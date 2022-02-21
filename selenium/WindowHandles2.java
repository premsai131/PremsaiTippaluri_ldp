package com.java.selenium;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import java.awt.*;
import java.util.concurrent.TimeUnit;

public class WindowHandles2 {

    static WebDriver driver;

    public static void main(String[] args) {

        System.setProperty("webdriver.chrome.driver", "D:\\Selenium\\chromedriver_win32\\chromedriver.exe");
        driver = new ChromeDriver();
        driver.get("https://www.rediff.com/");
        driver.manage().window().maximize();
        driver.manage().timeouts().pageLoadTimeout(15, TimeUnit.SECONDS);
        driver.manage().timeouts().implicitlyWait(4, TimeUnit.SECONDS);
        driver.manage().deleteAllCookies();

       int sizeOfLinks= driver.findElements(By.tagName("a")).size();
       System.out.println(sizeOfLinks);
       driver.findElement(By.xpath("//div[@id='topdiv_0']/h2"));
       //System.out.println(firstsection.getSize());

//

       // "//h2[@class='news']"
        String beforeXpath="//div[@id='topdiv_0']/h2[";

        String afterXpath="]";
        String clickon= Keys.chord(Keys.CONTROL,Keys.ENTER);

       for (int i=1;i<=5;i++){


           System.out.println(driver.findElement(By.xpath(beforeXpath+i+afterXpath)).getText());
           driver.findElement(By.xpath(beforeXpath+i+afterXpath)).sendKeys(clickon);
       }




    }
}
