# Rukita Automation Test
ruOptions web automation with Cypress and BDD. Authored by Hans.

## Test Environment
**https://partners.imarukita.ninja/**

## What You Need to Run The Test
```
1. Node.js installed on your local machine
2. Java 8 or higher (To Generate Allure Report) is installed on your machine
3. IDE (In my case, I use VS Code)
```

## How to Run Test With Cypress GUI

1. Clone this project
2. open your IDE and terminal
3. cd to the project directory
4. run the following command to install cypress and the dependencies
```
npm install
```
5. run npm run test or if that does not work try npx cypress open --env allure=true
```
npm run test
```
or

```
npx cypress open --env allure=true
```
6. Wait for the Cypress GUI to appear
7. Click `findRooms.feature` and let Cypress does its magic
8. Once the test is done running, close the tab and Cypress GUI
9 And, run this to generate report

```
 npm run report:allure
```



