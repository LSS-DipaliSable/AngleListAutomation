import { web_url } from '../variables/variables.js'

export default class HomePage {

	goToHomePage(){
		cy.visit(web_url);
	}
}