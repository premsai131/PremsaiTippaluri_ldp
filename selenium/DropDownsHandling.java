package com.java.selenium;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.TimeUnit;

public class DropDownsHandling extends AutomationPractice{

static WebDriver driver;
    public static void main(String[]args){
        System.setProperty("webdriver.chrome.driver", "D:\\Selenium\\chromedriver_win32\\chromedriver.exe");
        driver = new ChromeDriver();
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
            System.out.println(">>ALL THE ELEMENTS IN THE DROP DOWN MATCH WITH THE EXCPECTED>>TRUE");
        }
        else{
            System.out.println("false");
        }

        select.selectByVisibleText("Books");

//           driver.close();
//           driver.quit();
    }
}
