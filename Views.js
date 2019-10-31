const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless:false});
  const page = await browser.newPage();

  await page.goto('Proxy here')
  await page.type("#maintextfield","website to views here.")
  await page.keyboard.press('Enter')

  await page.waitForSelector("[data-a-target= 'browse-channels-button']")

  await page.click("[data-a-target= 'browse-channels-button']")

  const inputElement = await page.$('input[type=search]');
  
  await inputElement.click();


  await page.screenshot({path: 'example.png'});

  await page.waitFor(200000)

  await browser.close();
  

})();




  
  // console.log('Rainfall Submitted!');
  // await page.waitFor(2000)
  ///////////////////////////////////////////////////////////////////////////////////
  //automated Account Creation 
  // await page.click("[data-a-target = 'signup-button']")
  // await page.waitFor(2000)
  // await page.type("[data-a-target = 'tw-input']", "kevinLamping",{delay: 60})
  // await page.type("#password-input", 'KevinLamping',{delay: 60})
  // await page.click("[data-a-target = 'birthday-month-select']");
  // await page.type("select[data-a-target = 'birthday-month-select']", "January");
  // await page.click("[data-a-target = 'birthday-date-input']")
  // await page.type("[data-a-target = 'birthday-date-input']", '23',{delay: 60})
  // await page.click("[data-a-target = 'birthday-year-input']")
  // await page.type("[data-a-target = 'birthday-year-input']", '1991',{delay: 60})
  // await page.click("[data-a-target = 'signup-email-input']")
  // await page.type("[data-a-target = 'signup-email-input']", 'test@gmail.com',{delay: 60})
  ///////////////////////////////////////////////////////////////////////////////////