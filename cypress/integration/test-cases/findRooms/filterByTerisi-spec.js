import {Given, When, And, Then} from 'cypress-cucumber-preprocessor/steps';
import dashboardPage from '../../pages/dashboard';

Given('I have logged in as QA Test', () => {
    dashboardPage.qaTestLogin();
});

When('I select "Rukita 98 Residence Tebet" from property dropdown', () =>{
    dashboardPage.selectPropertyDropdown();
    dashboardPage.selectTebet98Residence();
});

Then('I should see "Total: 31 Kamar"', () =>{
   dashboardPage.total31KamarIsDisplayed();
});

When('I select "Terisi" from status kamar dropdown', () =>{
    dashboardPage.applyTerisiFilter();
});

And('I click "Simpan" button', () => {
    dashboardPage.clickSimpanBtn();
});

Then('I should see "Terisi" filter label is applied', () =>{
    dashboardPage.filterTerisiIsApplied();
});

And('I should see "Total: 14 Kamar"', () => {
    dashboardPage.total14KamarIsDisplayed();
});

And('I should see "Terisi" mark on displayed room cards', () => {
    dashboardPage.cardsWithTerisiMarkAreDisplayed();
});

When('I select "Tersedia" from status kamar dropdown', () => {
    dashboardPage.applyTersediaFilter();
});

Then('I should see "Tersedia" filter label is applied', () => {
    dashboardPage.filterTersediaIsApplied();
});

And('I should see "Tersedia" mark on displayed room cards', () => {
    dashboardPage.cardsWithTersediaMarkAreDisplayed();
});

When('I select "Tersedia" and "Terisi" from status kamar dropdown', () => {
    dashboardPage.applyBothFilters();
});

Then('filter labels should be applied', () => {
    dashboardPage.filtersAreApplied();
});