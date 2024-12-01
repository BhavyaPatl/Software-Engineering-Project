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
public class NavbarTest {
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
  public void navbar() {
    // Test name: Navbar
    // Step # | name | target | value
    // 1 | open | / | 
    driver.get("http://localhost:3000/");
    // 2 | setWindowSize | 1440x812 | 
    driver.manage().window().setSize(new Dimension(1440, 812));
    // 3 | click | css=.css-g3pe7h > img | 
    driver.findElement(By.cssSelector(".css-g3pe7h > img")).click();
    // 4 | click | css=div:nth-child(2) > .css-uoqacd | 
    driver.findElement(By.cssSelector("div:nth-child(2) > .css-uoqacd")).click();
    // 5 | click | css=div:nth-child(3) > .css-uoqacd > img | 
    driver.findElement(By.cssSelector("div:nth-child(3) > .css-uoqacd > img")).click();
    // 6 | click | css=div:nth-child(4) > .MuiBox-root > img | 
    driver.findElement(By.cssSelector("div:nth-child(4) > .MuiBox-root > img")).click();
    // 7 | click | css=.css-124t7be > div:nth-child(5) | 
    driver.findElement(By.cssSelector(".css-124t7be > div:nth-child(5)")).click();
    // 8 | click | css=div:nth-child(6) > .MuiBox-root > img | 
    driver.findElement(By.cssSelector("div:nth-child(6) > .MuiBox-root > img")).click();
    // 9 | click | css=div:nth-child(7) > .MuiBox-root > img | 
    driver.findElement(By.cssSelector("div:nth-child(7) > .MuiBox-root > img")).click();
    // 10 | click | css=div:nth-child(8) > .MuiBox-root > img | 
    driver.findElement(By.cssSelector("div:nth-child(8) > .MuiBox-root > img")).click();
  }
}
