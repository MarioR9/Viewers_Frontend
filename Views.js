const puppeteer = require('puppeteer');
const proxyChain = require('proxy-chain');



let site = 'CHANNEL_HERE';
let numOfViewers = 0;


(async () => {
   
//////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////// 1 proxy ///////////////////////////////////////

const oldProxyUrl = 'http://PROXY_SERVER:PORT';
const newProxyUrl = await proxyChain.anonymizeProxy(oldProxyUrl);

const browser = await puppeteer.launch({
  headless:false,
  args: [`--proxy-server=${newProxyUrl}`],
});

const page = await browser.newPage();
console.log("connecting to " + newProxyUrl)
await page.goto(site,{waitUntil: 'networkidle0'})

await browser.close();

})();
