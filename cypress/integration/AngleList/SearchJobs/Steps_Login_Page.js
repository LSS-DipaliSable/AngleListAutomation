import { And, Given, Then } from 'cypress-cucumber-preprocessor/steps';

import LoginPage  from  '../../pages/login_page.js';

let login_page = new LoginPage()

When('I enter the username {string}', email => {
    login_page.enterEmail(email)
});

And('I enter the password {string}', password => {
    login_page.enterPassword(password)
});

And('I click on Log In button', () => {
	login_page.clickOnLogInButton()
});