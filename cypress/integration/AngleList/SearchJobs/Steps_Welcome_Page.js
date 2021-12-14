import { Given, Then } from 'cypress-cucumber-preprocessor/steps';

import WelcomePage  from  '../../pages/welcome_page.js';

let welcome_page = new WelcomePage()

Given('I open Angle List page', () => {
	welcome_page.goToWelcomePage()
});

Then('I see {string} in the title', title => {
  cy.title().should("include", title);
});

Then('I click on Log In button on Home page', () => {
	welcome_page.clickOnLogInButton()
});

