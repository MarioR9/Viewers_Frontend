import React from 'react'

export default class StartBot extends React.Component{


    StartViewersScript=()=>{

        const puppeteer = require('puppeteer');
        const proxyChain = require('proxy-chain');
        
        let platformChannel = {
          facebook:`https://www.facebook.com/${this.props.channel}/videos/${this.props.fbVideoNumber}`,
          twitch: `https://www.twitch.tv/${this.props.twitch}`,
          mixer: `https://mixer.com/${this.props.mixer}`,
          youtube: `https://www.youtube.com/watch?v=${this.props.youtube}`
                      }
          let numOfViewers = 2;
          let timer = 2000;
        
        (async () => {
        
          while(numOfViewers > 0){
            const oldProxyUrl = 'http://167.99.232.18:8080';
            const newProxyUrl = await proxyChain.anonymizeProxy(oldProxyUrl);
        
            const browser = await puppeteer.launch({
              headless:false,
              args: [`--proxy-server=${newProxyUrl}`],
            });
        
            const page = await browser.newPage();
            console.log("connecting to " + newProxyUrl)
            await page.goto(platformChannel.this.props.channel,{waitUntil: 'networkidle0'})
            numOfViewers--;
          }
          await page.waitFor(timer)
        
          await browser.close();
        })();
        
    }
    

    render(){
    
        return(
            <div>
                
            </div>
        )
    }
}


