package com.java.selenium;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.Select;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.TimeUnit;

public class AutomationPractice {
    //wedriver
    //chromedriver
    //firefoxdrivr
    //safaridriver
    static WebDriver driver;

    public static void main(String[] args) throws InterruptedException {
        System.setProperty("webdriver.chrome.driver", "D:\\Selenium\\chromedriver_win32\\chromedriver.exe");

        WebDriver driver = new ChromeDriver();
        driver.manage().window().maximize();
        // driver.manage().window().fullscreen();
//        driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
//        driver.get("https://www.amazon.com/");
//        driver.findElement(By.xpath("//input[contains(@id,'twotabsearchtext')]")).sendKeys("playstation5"); //bassic id
//        driver.findElement(By.xpath("//input[@id='nav-search-submit-button']")).click();   //
//
//        driver.navigate().back();
//        Thread.sleep(10000);
//
//        driver.findElement(By.cssSelector("input#twotabsearchtextbox")).sendKeys("playstation2"); //css with id
//        driver.findElement(By.cssSelector("#nav-search-submit-button")).click();  //css with class
//        driver.navigate().back();
//        Thread.sleep(1000);
//
//        driver.navigate().forward();
//        driver.findElement(By.xpath("//span[contains(text(),'Playstation 2 Console - Black')]")).click();
//        driver.findElement(By.id("add-to-cart-button-ubb")).click();
//        Thread.sleep(1000);
//
////            driver.findElement(By.xpath("//span[@id='sc-buy-box-ptc-button-announce']//parent::span/input")).click();
//        driver.findElement(By.xpath("//a[@id='nav-orders']/following-sibling::a/div[1]")).click();
//        Thread.sleep(3000);

        driver.get("https://www.amazon.com/");
        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
        Select select = new Select(driver.findElement(By.xpath("//select[@id='searchDropdownBox']")));
        List<WebElement> allcategory = select.getOptions();
        ArrayList<String> actual=new ArrayList<String>();

        int sizeofallCategory = allcategory.size();
        for (WebElement e : allcategory) {

            System.out.println(e.getText());
            actual.add(e.getText());
        }
for(String e:actual){
    System.out.println(e);

}

if(actual.containsAll(actual)) {
    System.out.println("true");
}
else{
    System.out.println("false");
}

        select.selectByVisibleText("Books");







//           driver.close();
//           driver.quit();


//id
//xpath
//classname
//css Selectors
//linktext
//tagname

    }
}


