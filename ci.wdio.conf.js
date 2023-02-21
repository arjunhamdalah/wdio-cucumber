import { config } from "./wdio.conf.js";

export const  config = {
    ...config,
    ...{
        
        capabilities: [{
            maxInstances: 1,
            browserName: 'chrome',
            'goog:chromeOptions': {
                binary: '/opt/hostedtoolcache/chromium/latest/x64/chrome'
            },
            acceptInsecureCerts: true,
        },
        ],
    },
};