package com.java.selenium;

import org.openqa.selenium.By;
import org.openqa.selenium.StaleElementReferenceException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import java.util.concurrent.TimeUnit;

public class CalenderHandling extends DynamicDropDown{
    static WebDriver driver;

    public static void main(String[] args) throws InterruptedException {
        System.setProperty("webdriver.chrome.driver", "D:\\Selenium\\chromedriver_win32\\chromedriver.exe");
        driver = new ChromeDriver();
        driver.get("https://www.irctc.co.in/nget/train-search");
        driver.manage().window().maximize();
        driver.manage().timeouts().pageLoadTimeout(15, TimeUnit.SECONDS);
        driver.manage().timeouts().implicitlyWait(4, TimeUnit.SECONDS);
        driver.manage().deleteAllCookies();

        driver.findElement(By.xpath("//button[contains(text(),'OK')]")).click();
        //driver.findElement(By.xpath("//*[@id=\"login_header_disable\"]/div/div/div[2]/a")).click();


        driver.findElement(By.xpath("//input[@class='ng-tns-c59-10 ui-inputtext ui-widget ui-state-default ui-corner-all ng-star-inserted']")).click();
        //now i need to get both month and year texts
        String month = driver.findElement(By.xpath("//span[@class='ui-datepicker-month ng-tns-c59-10 ng-star-inserted']")).getText();
        String year = driver.findElement(By.xpath("//span[@class='ui-datepicker-month ng-tns-c59-10 ng-star-inserted']//following-sibling::span")).getText();

       // WebElement nextBtn = driver.findElement(By.xpath("//span[@class='ui-datepicker-next-icon pi pi-chevron-right ng-tns-c59-10']"));

        //String requiredDate = "13";


//now i want to select 18th june 2022 i use while loop beacuse i dont know the range
        while (!(month.equals("June") && year.equals("2022"))) {
            Thread.sleep(300);

            driver.findElement(By.xpath("/html[1]/body[1]/app-root[1]/app-home[1]/div[3]/div[1]/app-main-page[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-jp-input[1]/div[1]/form[1]/div[2]/div[2]/div[1]/p-calendar[1]/span[1]/div[1]/div[1]/div[1]/a[2]/span[1]")).click();
            month = driver.findElement(By.xpath("//span[@class='ui-datepicker-month ng-tns-c59-10 ng-star-inserted']")).getText();
            year = driver.findElement(By.xpath("//span[@class='ui-datepicker-month ng-tns-c59-10 ng-star-inserted']//following-sibling::span")).getText();
        }
        driver.findElement(By.xpath("//a[contains(text(),'18')]")).click();

        //expectedDate.click();


    }

    }


