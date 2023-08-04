Feature: Sign Up a Customer

  As a program officer,
  In order to sign up a customer successfully,
  I want to be able to fill the sign-up form with details.

Scenario: Successfull Customer Sign Up with valid details
Given I am on the sign up page

When I fill in the valid form details from below:
    | Customer Name | Registration No | StreetAddress1 | StreetAddress2 | StreetAddress3 | City | State| Country | Postcode | Main Phone | Fax | Website | Email | Source | Industry | FirstName | LastName | Direct Phone | Job Title | PrimaryEmail |
    | Swati | 123456 | 20 | Plymouth Drive | Essendon | Melbourne | VIC | Fiji | 3064 | 0412121212 | 1122334455 | www.test.com | test@test.com | Web Search | IT Consultants | Swati | Kamboj | 0412131415 | CIO | test@crayon.com |
    
And Click on the Sign Up button

Then I should see a success message for customer signed up

