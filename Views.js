const puppeteer = require('puppeteer');
const proxyChain = require('proxy-chain');



let site = 'CHANNEL_HERE';
let numOfViewers = 0;


(async () => {
   
  
//////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////// 1 proxy ///////////////////////////////////////

  const oldProxyUrl = 'http://PROXY_ADDRESS:PORT';
  const newProxyUrl = await proxyChain.anonymizeProxy(oldProxyUrl);

  const browser = await puppeteer.launch({
    headless:false,
    args: [`--proxy-server=${newProxyUrl}`],
});

  const page = await browser.newPage();
  console.log("connecting to " + newProxyUrl)
  await page.goto(site,{waitUntil: 'networkidle0'})

// // //////////////////////////////////////////////////////////////////////////////////////////
// // ////////////////////////////////// 2 proxy //////////////////////////////////////////////
  
  const oldProxyUrl2 = 'http://PROXY_ADDRESS:PORT';
  const newProxyUrl2 = await proxyChain.anonymizeProxy(oldProxyUrl2);
 
  const browser2 = await puppeteer.launch({
    headless:false,
    args: [`--proxy-server=${newProxyUrl2}`],
});

  const page2 = await browser2.newPage();
  console.log("connecting to " + newProxyUrl2)
  await page2.goto(site,{waitUntil: 'networkidle0'})
  
// // //////////////////////////////////////////////////////////////////////////////////////////
// // ////////////////////////////////// 3  proxy /////////////////////////////////////////////

  const oldProxyUrl3 = 'http://PROXY_ADDRESS:PORT';
  const newProxyUrl3 = await proxyChain.anonymizeProxy(oldProxyUrl3);

  const browser3 = await puppeteer.launch({
    headless:false,
    args: [`--proxy-server=${newProxyUrl3}`],
});

  const page3 = await browser3.newPage();
  console.log("connecting to " + newProxyUrl3)
  await page3.goto(site,{waitUntil: 'networkidle0'})

// // //////////////////////////////////////////////////////////////////////////////////////////
// // /////////////////////////////////////////////////////////////////////////////////////////
  await browser.close();
  await browser2.close();
  await browser3.close();
})();
