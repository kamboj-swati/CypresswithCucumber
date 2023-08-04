Feature: Sign Up a Customer

  As a program officer,
  In order to sign up a customer successfully,
  I want to be able to fill the sign-up form with details.

Scenario: Successfull Customer Sign Up with valid details
Given I am on the sign up page
When I fill in the form details
Then I should see a success message for customer signed up

