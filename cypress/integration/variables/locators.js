/* 
common placeholder to store all locators, so that in case any 
locator changes we need to just it just here!
*/

export const welcome_page_locators = {
	'login_button': '.auth login u-fontWeight300'
}

export const login_page_locators = {
	'email_textbox': '#user_email',
	'password_textbox': '#user_password',
	'login_button': '[type=submit]'
}

export const jobs_page_locators = {
	'jobs_menu_button': '[data-test=ItemJobs]',
	'add_a_job_title_textbox': '.styles_label__hrk0T',
	'add_a_location_textbox':'.styles_label__AOfZC',
	'get_job_alerts_for_this_search_toggle_button': '#SavedSearch-isAlertActive-desktop'
}