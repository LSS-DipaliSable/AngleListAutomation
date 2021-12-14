import { And} from 'cypress-cucumber-preprocessor/steps';

import JobsPage  from  '../../pages/jobs_page.js';

let jobs_page = new JobsPage()

And('I click Jobs menu', () => {
	jobs_page.clickOnJobsMenu()
});

And('I add the {string} as job title', jobTitle => {
    jobs_page.enterjobTitle(jobTitle)
});

And('I click on {string} from job suggestion', jobName => {
    jobs_page.clickOnGivenJob(jobName)
});

And('I add the {string} as location', jobLocation => {
    jobs_page.enterJobLocation(jobLocation)
});

And('I add the {string} from location suggestion', jobLocation => {
    jobs_page.clickOnGivenLocation(locationName)
});

Then('Verify that Get job alerts for this search toggle button should be shown', () => {
	jobs_page.isToggleShown()
});

