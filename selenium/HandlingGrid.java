package com.java.selenium;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import java.util.concurrent.TimeUnit;

public class HandlingGrid {

    static WebDriver driver;

    public static void main(String[] args) {
        System.setProperty("webdriver.chrome.driver", "D:\\Selenium\\chromedriver_win32\\chromedriver.exe");
        driver =new ChromeDriver();
        driver.get("https://www.w3schools.com/html/html_tables.asp");
        driver.manage().window().maximize();
        driver.manage().timeouts().pageLoadTimeout(15, TimeUnit.SECONDS);
        driver.manage().timeouts().implicitlyWait(4, TimeUnit.SECONDS);
        driver.manage().deleteAllCookies();

        //to print all the 1st column text values
        driver.findElement(By.xpath(("//table//tbody//tr//td[1]")));
        String beforeXpath="(//table//tbody//tr//td[2])[";
        String AfterXpath="]";

        for (int i=1;i<=6;i++){
            System.out.println(driver.findElement(By.xpath((beforeXpath+i+AfterXpath))).getText());



        }

        //to get values for each and every row in the first table
        //div[@class='w3-white w3-padding notranslate w3-padding-16']//table//tr    //xpath for the table rows

        String beforeXpath1="//div[@class='w3-white w3-padding notranslate w3-padding-16']//table//tr[";
        String afterXpath1="]";

        for (int i=1;i<=7;i++){
            System.out.println(driver.findElement(By.xpath(beforeXpath1+i+afterXpath1)).getText());

        }


    }


}
