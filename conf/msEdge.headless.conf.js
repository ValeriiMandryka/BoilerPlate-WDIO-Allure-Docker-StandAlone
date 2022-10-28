const {config} = require("../wdio.conf");
const path = require("path");

const chromeHeadlessConfig = {
...config,
services: ["selenium-standalone"],
capabilities: [{
maxInstances: 4,
browserName: 'MicrosoftEdge',
'ms:edgeOptions': {args: [ '--headless','--start-maximized', '--no-sandbox', '--disable -gpu', '--window-size=1920,780', '--allow-insecure-localhost']},
 acceptInsecureCerts: true, }],
logLevel: 'warn',


path: "/wd/hub",

};

exports.config = chromeHeadlessConfig;