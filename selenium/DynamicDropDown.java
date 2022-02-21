package com.java.selenium;

import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.TimeUnit;

public class DynamicDropDown {
    static WebDriver driver;

    public static void main(String[] args) throws InterruptedException {
        System.setProperty("webdriver.chrome.driver", "D:\\Selenium\\chromedriver_win32\\chromedriver.exe");
        driver = new ChromeDriver();
        //now hit make my trip and automate dynmaic dropdown

//        driver.get("https://www.makemytrip.com/flights/");
//        driver.manage().window().maximize();
//        driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
//
//        //first iam validating both the from and destination dropdown cities
//        Thread.sleep(3000);
//
//        driver.findElement(By.xpath("//body/div[@id='root']/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/nav[1]/ul[1]/li[2]/a[1]")).click();
//        //driver.findElement(By.xpath("//div[@class='makeFlex']//ul//li[2]//span")).click();
//
//    }

        //     }
//        List<WebElement> from= driver.findElements(By.xpath("//input[@id=\"fromCity\"]"));
//        ArrayList<String> list=new ArrayList<String>();
//        for(int i=0;i<from.size();i++){
//            list.add(from.get(i).getText());
//            System.out.println(from.get(i).getText());
//
//        }

        //  List<WebElement> from =driver.findElements(By.xpath("//input[@id=\"fromCity\"]"));
//        for(WebElement e:from){
//            System.out.println(e.getText());
//        }


        driver.get("https://www.irctc.co.in/nget/train-search");
        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
        driver.manage().deleteAllCookies();
        //Thread.sleep(2000);
        driver.findElement(By.xpath("//button[contains(text(),'OK')]")).click();

        //input[@class="ng-tns-c58-8 ui-inputtext ui-widget ui-state-default ui-corner-all ui-autocomplete-input ng-star-inserted"]
        driver.findElement(By.xpath("(//span//input)[1]")).click();
        //li[@class="ng-tns-c58-8 ng-star-inserted ui-autocomplete-list-item ui-corner-all"]
        //li//span[@class='ng-star-inserted'] //this was the actual
        //span[@class='ng-star-inserted']
        //li[@class='ng-tns-c58-8 ng-star-inserted ui-autocomplete-list-item ui-corner-all']
        List<WebElement> from = driver.findElements(By.xpath("//span[@class='ng-star-inserted']"));
        System.out.println(from.size());
        for (WebElement e : from) {
          //System.out.println(e.getSize());
               try{
                String cityname = e.getText();
                System.out.println("from >>"+cityname);
                if (cityname.equals("KACHEGUDA - KCG")) {
                    e.click();
                } else {

                }
            }catch (StaleElementReferenceException c) {
                c.printStackTrace();
            }


        }
        //Thread.sleep(3000);
//driver.findElement(By.xpath("//div//label[@class=\"heading-font\"]")).click(); //clicking on the side to change the cursor
        //div//span//input[@class="ng-tns-c58-9  ui-inputtext ui-widget ui-state-default ui-corner-all ui-autocomplete-input ng-star-inserted"]
        driver.findElement(By.xpath("//input[@class='ng-tns-c58-9 ui-inputtext ui-widget ui-state-default ui-corner-all ui-autocomplete-input ng-star-inserted']")).click(); //for from destination clicking
        //li//span[@class='ng-tns-c58-9 ng-star-inserted']
        //li//span[@class="ng-tns-c58-9 ng-star-inserted"]
        //span[@class='ng-tns-c58-9 ng-star-inserted'] //>>>>>this custom xpath is working fine
        List<WebElement> toDestination = driver.findElements(By.xpath("//span[@class='ng-tns-c58-9 ng-star-inserted']"));
        System.out.println(toDestination.size());
        for (WebElement a: toDestination) {

            try {
                String cityname = a.getText();
                System.out.println(">>>desitnations names " + cityname);
                if (cityname.equals("TIRUPATI - TPTY")) {
                    a.click();
                }

        }catch (StaleElementReferenceException d){
                d.printStackTrace();
    }
        }

        //span[@class="ng-tns-c66-12 ui-dropdown-label ui-inputtext ui-corner-all ng-star-inserted"] >>
        driver.findElement(By.xpath("//span[@class='ng-tns-c66-12 ui-dropdown-label ui-inputtext ui-corner-all ng-star-inserted']")).click(); //general catgory buttom

        List<WebElement> ticketcategory = driver.findElements(By.xpath("//div//ul[@class='ui-dropdown-items ui-dropdown-list ui-widget-content ui-widget ui-corner-all ui-helper-reset ng-tns-c66-12']"));
        for (WebElement b : ticketcategory) {

            String category = b.getText();
            System.out.println(category);

            if(category.startsWith("GEN")){ //this line has some problem need to rectify
                b.click();
            }
            else{
                System.out.println("required element not present ");
            }

            }
        }

            }












