
        const puppeteer = require('puppeteer');
        const proxyChain = require('proxy-chain');

        const serversList = {
          1:"206.57.165.188:8080",	
          2:"70.110.31.20:8080",
          3:"209.141.46.133:8080",
          4:"104.248.11.7:8080",
          5:"144.121.248.114:8080",
          6:"160.2.38.41:8080",
          7:"74.219.196.230:8080",
          8:"65.155.71.194:8080"
      }
      
        let platformChannel = {
          website: "www.twitch.com/nickeh30"
                      }
          let numOfViewers = 2;
          let timer = 2000;
        
        (async () => {
            const oldProxyUrl = serversList[8];
            const newProxyUrl = await proxyChain.anonymizeProxy(oldProxyUrl);
        
            const browser = await puppeteer.launch({
              headless:false,
              args: [`--proxy-server=${newProxyUrl}`],
            });
        
            const page = await browser.newPage();
            console.log("connecting to " + newProxyUrl)
            await page.goto(platformChannel.website,{waitUntil: 'networkidle0'})
            numOfViewers--;
        
          await page.waitFor(timer)
        
          await browser.close();
        })();
