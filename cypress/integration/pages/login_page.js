import { login_page_locators } from '../variables/locators.js';

export default class LoginPage {

	enterEmail(email){
        cy.get(login_page_locators['email_textbox']).should('be.visible').should('be.enabled').type(email)
	}

    enterPassword(password){
        cy.get(login_page_locators['password_textbox']).should('be.visible').should('be.enabled').type(password)  
    }

    clickOnLogInButton(){
		cy.get(login_page_locators['login_button']).click();
	}
}