// Generated by Selenium IDE
import org.junit.Test;
import org.junit.Before;
import org.junit.After;
import static org.junit.Assert.*;
import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.core.IsNot.not;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Alert;
import org.openqa.selenium.Keys;
import java.util.*;
import java.net.MalformedURLException;
import java.net.URL;
public class AddProductPageTest {
  private WebDriver driver;
  private Map<String, Object> vars;
  JavascriptExecutor js;
  @Before
  public void setUp() {
    driver = new ChromeDriver();
    js = (JavascriptExecutor) driver;
    vars = new HashMap<String, Object>();
  }
  @After
  public void tearDown() {
    driver.quit();
  }
  @Test
  public void addProductPage() {
    // Test name: Add Product Page
    // Step # | name | target | value
    // 1 | open | / | 
    driver.get("http://localhost:3000/");
    // 2 | setWindowSize | 1440x812 | 
    driver.manage().window().setSize(new Dimension(1440, 812));
    // 3 | click | css=.css-11sgoyl-MuiButtonBase-root-MuiButton-root | 
    driver.findElement(By.cssSelector(".css-11sgoyl-MuiButtonBase-root-MuiButton-root")).click();
    // 4 | click | css=.css-ioqfxg-MuiButtonBase-root-MuiButton-root | 
    driver.findElement(By.cssSelector(".css-ioqfxg-MuiButtonBase-root-MuiButton-root")).click();
    // 5 | click | id=:r9: | 
    driver.findElement(By.id(":r9:")).click();
    // 6 | type | id=:r9: | tusharmori543@gmail.com
    driver.findElement(By.id(":r9:")).sendKeys("tusharmori543@gmail.com");
    // 7 | click | id=:r9: | 
    driver.findElement(By.id(":r9:")).click();
    // 8 | type | id=:r9: | tusharmori54
    driver.findElement(By.id(":r9:")).sendKeys("tusharmori54");
    // 9 | click | id=:rb: | 
    driver.findElement(By.id(":rb:")).click();
    // 10 | mouseOver | css=.css-3uz8ua-MuiButtonBase-root-MuiButton-root | 
    {
      WebElement element = driver.findElement(By.cssSelector(".css-3uz8ua-MuiButtonBase-root-MuiButton-root"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element).perform();
    }
    // 11 | type | id=:rb: | TUshar@123
    driver.findElement(By.id(":rb:")).sendKeys("TUshar@123");
    // 12 | click | css=.css-3uz8ua-MuiButtonBase-root-MuiButton-root | 
    driver.findElement(By.cssSelector(".css-3uz8ua-MuiButtonBase-root-MuiButton-root")).click();
    // 13 | mouseOut | css=.css-3uz8ua-MuiButtonBase-root-MuiButton-root | 
    {
      WebElement element = driver.findElement(By.tagName("body"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element, 0, 0).perform();
    }
    // 14 | mouseOver | css=.MuiIconButton-edgeEnd > .MuiSvgIcon-root | 
    {
      WebElement element = driver.findElement(By.cssSelector(".MuiIconButton-edgeEnd > .MuiSvgIcon-root"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element).perform();
    }
    // 15 | click | css=.MuiIconButton-edgeEnd > .MuiSvgIcon-root | 
    driver.findElement(By.cssSelector(".MuiIconButton-edgeEnd > .MuiSvgIcon-root")).click();
    // 16 | click | id=:rb: | 
    driver.findElement(By.id(":rb:")).click();
    // 17 | mouseOver | css=.css-3uz8ua-MuiButtonBase-root-MuiButton-root | 
    {
      WebElement element = driver.findElement(By.cssSelector(".css-3uz8ua-MuiButtonBase-root-MuiButton-root"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element).perform();
    }
    // 18 | type | id=:rb: | Tushar@123
    driver.findElement(By.id(":rb:")).sendKeys("Tushar@123");
    // 19 | click | css=.css-3uz8ua-MuiButtonBase-root-MuiButton-root | 
    driver.findElement(By.cssSelector(".css-3uz8ua-MuiButtonBase-root-MuiButton-root")).click();
    // 20 | mouseOver | css=.MuiButton-containedSecondary | 
    {
      WebElement element = driver.findElement(By.cssSelector(".MuiButton-containedSecondary"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element).perform();
    }
    // 21 | click | css=.MuiButton-containedSecondary | 
    driver.findElement(By.cssSelector(".MuiButton-containedSecondary")).click();
    // 22 | click | id=:rd: | 
    driver.findElement(By.id(":rd:")).click();
    // 23 | type | id=:rd: | 12345
    driver.findElement(By.id(":rd:")).sendKeys("12345");
    // 24 | click | id=:rf: | 
    driver.findElement(By.id(":rf:")).click();
    // 25 | type | id=:rf: | https://www.instagram.com/reel/C2NMDIpPfmm/?igsh=MTk5dDM2OGVvd21vNA==
    driver.findElement(By.id(":rf:")).sendKeys("https://www.instagram.com/reel/C2NMDIpPfmm/?igsh=MTk5dDM2OGVvd21vNA==");
    // 26 | click | id=:rh: | 
    driver.findElement(By.id(":rh:")).click();
    // 27 | type | id=:rh: | https://www.google.com/url?sa=i&url=https%3A%2F%2Fgratisography.com%2F&psig=AOvVaw2S9ewEuPnV-ZauY1Rfuinm&ust=1732197026442000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJivv_WG64kDFQAAAAAdAAAAABAE
    driver.findElement(By.id(":rh:")).sendKeys("https://www.google.com/url?sa=i&url=https%3A%2F%2Fgratisography.com%2F&psig=AOvVaw2S9ewEuPnV-ZauY1Rfuinm&ust=1732197026442000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJivv_WG64kDFQAAAAAdAAAAABAE");
    // 28 | click | id=:rj: | 
    driver.findElement(By.id(":rj:")).click();
    // 29 | type | id=:rj: | product
    driver.findElement(By.id(":rj:")).sendKeys("product");
    // 30 | click | id=:rl: | 
    driver.findElement(By.id(":rl:")).click();
    // 31 | type | id=:rl: | Macbook Air m1
    driver.findElement(By.id(":rl:")).sendKeys("Macbook Air m1");
    // 32 | click | id=:rn: | 
    driver.findElement(By.id(":rn:")).click();
    // 33 | click | id=:rj: | 
    driver.findElement(By.id(":rj:")).click();
    // 34 | type | id=:rj: | Laptop
    driver.findElement(By.id(":rj:")).sendKeys("Laptop");
    // 35 | click | id=:rn: | 
    driver.findElement(By.id(":rn:")).click();
    // 36 | type | id=:rn: | 121000
    driver.findElement(By.id(":rn:")).sendKeys("121000");
    // 37 | click | id=:rp: | 
    driver.findElement(By.id(":rp:")).click();
    // 38 | type | id=:rp: | 100000
    driver.findElement(By.id(":rp:")).sendKeys("100000");
    // 39 | click | id=:rr: | 
    driver.findElement(By.id(":rr:")).click();
    // 40 | type | id=:rr: | 11000
    driver.findElement(By.id(":rr:")).sendKeys("11000");
    // 41 | click | id=:rn: | 
    driver.findElement(By.id(":rn:")).click();
    // 42 | type | id=:rn: | 111000
    driver.findElement(By.id(":rn:")).sendKeys("111000");
    // 43 | click | id=:rt: | 
    driver.findElement(By.id(":rt:")).click();
    // 44 | type | id=:rt: | -1
    driver.findElement(By.id(":rt:")).sendKeys("-1");
    // 45 | click | id=:rv: | 
    driver.findElement(By.id(":rv:")).click();
    // 46 | type | id=:rv: | best laptop
    driver.findElement(By.id(":rv:")).sendKeys("best laptop");
    // 47 | click | id=:rt: | 
    driver.findElement(By.id(":rt:")).click();
    // 48 | type | id=:rt: | 3
    driver.findElement(By.id(":rt:")).sendKeys("3");
    // 49 | click | id=:rv: | 
    driver.findElement(By.id(":rv:")).click();
    // 50 | click | id=:r11: | 
    driver.findElement(By.id(":r11:")).click();
    // 51 | type | id=:r11: | 10%
    driver.findElement(By.id(":r11:")).sendKeys("10%");
    // 52 | click | id=:r13: | 
    driver.findElement(By.id(":r13:")).click();
    // 53 | type | id=:r13: | please buy
    driver.findElement(By.id(":r13:")).sendKeys("please buy");
    // 54 | click | css=.MuiButtonBase-root | 
    driver.findElement(By.cssSelector(".MuiButtonBase-root")).click();
  }
}
