Feature: The Search Jobs

  I want to open Jobs page

  Scenario: Opening a Jobs page
    Given I open Angle List page
    Then I see 'Find your dream startup job' in the title
    When I click on Log In button on Home page
    And I enter the username "lsspl23@gmail.com"
    And I enter the password "Lodestone@123"
    And I click on Log In button
    And I click Jobs menu
    And I add the 'Software Engineer' as job title
    And I click on 'Software Engineer' from job suggestion
    And I add the 'India' as location
    And I click on 'Software Engineer' from location suggestion
    Then Verify that Get job alerts for this search toggle button should be shown
