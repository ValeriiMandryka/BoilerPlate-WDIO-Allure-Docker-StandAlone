
   
# WDIO_Docker_crossBrowsersTest_AllureReport  
Template repository for project based on WDIO framefork with configurated GitHub actions and Allure report. Can be used for auto testing on Chrome/Firefox/Edge browsers with Allure Report. 

##  Envoirment for succesfull test runung:
   [Node.js](https://nodejs.org/uk/)
   [VSC](https://code.visualstudio.com/download)
   
   
##  Envoirment to run in Docker:
   [Docker](https://docs.docker.com/desktop/install/windows-install/)
    
##  Plugins:
   1. [selenium-standalon](https://webdriver.io/docs/selenium-standalone-service/)
   2. [allure-reporter](https://webdriver.io/docs/allure-reporter/)
   3. [docker](https://webdriver.io/docs/wdio-docker-service/#installation)
   4. [cross-env](https://www.npmjs.com/package/cross-env)
   
## Steps to install project

## 1. Run command in VSC:

```
https://github.com/ValeriiMandryka/Boilerplate-WDIO-Allure-Docker-StandAlone.git

```
## 2. Into root of Project run commands:
```
npm install

```
## 3. Run tests commands

   3.1 run tests in headless mode on browsers[Chrome,Firefox,Edge]
       
        npm run crossbrowser:test:headless  
   3.2 run tests in Chrome headless mode    
   
        npm run chrome:headless   
   3.3 run tests in Chrome headed mode    
   
        npm run chrome:ui 
   3.4  run tests in Firefox headless mode
   
       npm run firefox:headless
   3.5  run tests in Firefox headed mode
       
       npm run firefox:ui  
   3.6 run tests in msEdge headless mode
   
       npm run msEdge:headless
   3.7  run tests in msEdge headed mode
       
       npm run msEdge:ui 
   3.8 - runs tests using envoirments of Chrome browser
   
       npm run cross.env:chrome 
   3.9 -runs tests using envoirments of Firefox browser
   
       npm run cross.env:firefox
  
   
    

## 4. Allure report:
   4.1 To generate Allure report arun follow command after the test that you chose for run
   ```
   npm run generate:allure-report

   ```
   4.2 To open Allure report, run command:
    
   ```
   npm run open:allure-report

   ```
## 5. To run test in Docker:

   1. Lounch Docker
   2. Open project in VSC
   3. Split terminal
   3. In first terminal to run Containers for tests run:
```
npm run docker:composeruner:exit
```
   4. In second terminal to run  tests run:
```
npm run docker:crossbrowser
```
   5. To stop containers run:
```
Docker compose down
```
