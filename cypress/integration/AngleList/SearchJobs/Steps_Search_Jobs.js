import { Given, Then } from 'cypress-cucumber-preprocessor/steps';

import HomePage  from  '../../pages/home_page.js';		//TODO :: if we give { HomePage } it fails.

Given('I open Angle List page', () => {
	let home_page = new HomePage()
	home_page.goToHomePage()
});

Then(`I see {string} in the title`, title => {
  cy.title().should("include", title);
});
