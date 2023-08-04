Feature: Sign Up a Customer

  As a program officer,
  In order to sign up a customer successfully,
  I want to be able to fill the sign-up form with details.

Scenario: Successfull Customer Sign Up with valid details
Given I am on the sign up page
When I fill in the valid form details:
    
    | Customer Name | Registration No | StreetAddress1 | Postcode |
    | Swati | 123456 | 22 Monomeath Drive | 3064 |
    
Then I should see a success message for customer signed up

