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
2. Open your IDE and terminal
3. Cd to the project directory
4. run the following command to install cypress and the dependencies
```
npm install
```
5. Run npm run test or if that does not work try npx cypress open --env allure=true
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

## How to Run The Test in Headless Mode
simply run the following command and sit back and drink your water. The results should come up in a bit.

```
npm run headless
```
## Test Results

GUI report

![automation-report1](https://user-images.githubusercontent.com/77434534/180611154-6cf785de-5b8e-4e64-937a-935c9a58b2ce.png)
![automation-report2](https://user-images.githubusercontent.com/77434534/180611165-9d043301-b767-47b4-8260-7570bc21e789.png)
![automation-report3](https://user-images.githubusercontent.com/77434534/180611171-811f8b6d-a17b-4800-82e5-420398517787.png)

Headless
![headless-report](https://user-images.githubusercontent.com/77434534/180612079-8900a36f-778a-4e52-858b-c8d467ea2540.png)



