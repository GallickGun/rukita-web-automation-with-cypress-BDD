import {Given, When, And, Then} from 'cypress-cucumber-preprocessor/steps';
import loginPage from '../../pages/login';


Given('I navigate to ruOptions landing page', () => {
    loginPage.visit();
});

When('I input valid email and password', () => {
    loginPage.inputEmail();
    loginPage.inputPassword();
});

And('I click "Sign in" button', () => {
    loginPage.clickSignInBtn();
});

Then('I should be navigated to Dashboard', () => {
    loginPage.isNavigatedToDashboard();
});
