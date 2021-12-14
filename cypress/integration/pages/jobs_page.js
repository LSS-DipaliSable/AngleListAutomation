import { jobs_page_locators } from '../variables/locators.js';

export default class JobsPage {

    clickOnJobsMenu(){
		cy.get(jobs_page_locators['jobs_menu_button']).click()
	}

	enterjobTitle(jobTitle){
		cy.get(jobs_page_locators['add_a_job_title_textbox']).should('be.visible').should('be.enabled').type(jobTitle)  
	}

	clickOnGivenJob(jobName){
		cy.contains(jobName).click()    
	}

	enterJobLocation(jobLocation){
		cy.get(jobs_page_locators['add_a_location_textbox']).should('be.visible').should('be.enabled').type(jobLocation)  	
	}

	clickOnGivenLocation(locationName){
		cy.contains(locationName).click()    
	}

	isToggleShown(){
		cy.get(jobs_page_locators['get_job_alerts_for_this_search_toggle_button']).should('be.visible')
	}
}