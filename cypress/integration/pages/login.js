const INPUT_EMAIL = 'input[id=email]';
const INPUT_PASSWORD = 'input[id=password]'
const BUTTON_SIGN_IN = 'button[type=submit]'

 class LoginPage{
    visit(){
        cy.visit('/');
    }

    inputEmail(){
        cy.get(INPUT_EMAIL).type(Cypress.env("email"));
    }

    inputPassword(){
        cy.get(INPUT_PASSWORD).type(Cypress.env("password"));
    }
    
    clickSignInBtn(){
        cy.get(BUTTON_SIGN_IN).click();
    }

    isNavigatedToDashboard(){
        cy.url().should('include', '/dashboard');
    }
}

const loginPage=new LoginPage();
export default loginPage;