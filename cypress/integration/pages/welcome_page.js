import { web_url } from '../variables/variables.js'
import { welcome_page_locators } from '../variables/locators.js';

export default class WelcomePage {

	goToWelcomePage(){
		cy.visit(web_url);
	}

	clickOnLogInButton(){
		cy.get(welcome_page_locators['login_button']).click();
	}

}