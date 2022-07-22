const DROPDOWN_PROPERTY = '.mb-4 > :nth-child(4)';
const TEBET_98_RESIDENCE = ':nth-child(8) > .overlay-navigation';
const DROPDOWN_STATUS_KAMAR = '.btn-filter';
const CHECKBOX_TERISI = ':nth-child(2) > .checkbox > .custom-control-label > .ml-1';
const CHECKBOX_TERSEDIA = ':nth-child(1) > .checkbox > .custom-control-label > .ml-1';
const CARD_LABEL_TERSEDIA = ':nth-child(1) > .py-4 > .container-fluid > .d-flex > :nth-child(1) > :nth-child(1) > .row > :nth-child(2) > .mb-4 > .css-6gwbay';
const CARD_LABEL_TERISI = ':nth-child(2) > .py-4 > .container-fluid > .d-flex > :nth-child(1) > :nth-child(1) > .row > :nth-child(2) > .mb-4 > .css-1m2rwj2';
const FILTER_LABEL_TERISI = '.d-inline-block';
const FILTER_LABEL_TERSEDIA = '.d-inline-block'
const BUTTON_SIMPAN = '.btn-apply-filter';


class DashboardPage{
    
    qaTestLogin(){
        cy.visit('/');
        cy.get('input[id=email]').type(Cypress.env("email"));
        cy.get('input[id=password]').type(Cypress.env("password"));
        cy.get("button[type=submit]").click();
    }

    selectPropertyDropdown(){
        cy.get(DROPDOWN_PROPERTY).click();
    }

    selectTebet98Residence(){
        cy.get(TEBET_98_RESIDENCE).click();
    }

    applyTerisiFilter(){
        cy.get(DROPDOWN_STATUS_KAMAR).click();
        cy.get(CHECKBOX_TERISI).click();
    }

    applyTersediaFilter(){
        cy.get(DROPDOWN_STATUS_KAMAR).click();
        cy.get(CHECKBOX_TERSEDIA).click();
    }

    clickSimpanBtn(){
        cy.get(BUTTON_SIMPAN).click();
    }

    total31KamarIsDisplayed(){
        cy.contains("Total: 31 Kamar");
    }

    total14KamarIsDisplayed(){
        cy.contains('Total: 14 Kamar');
    }

    filterTerisiIsApplied(){
        cy.get(FILTER_LABEL_TERISI).should('be.visible');
    }

    filterTersediaIsApplied(){
        cy.get(FILTER_LABEL_TERSEDIA).should('be.visible');
    }

    cardsWithTerisiMarkAreDisplayed(){
        cy.get(CARD_LABEL_TERISI).should('be.visible');
    }

    cardsWithTersediaMarkAreDisplayed(){
        cy.get(CARD_LABEL_TERSEDIA).should('be.visible');
    }

}

const dashboardPage = new DashboardPage();
export default dashboardPage;