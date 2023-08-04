import { Given, When, Then} from "cypress-cucumber-preprocessor/steps";

Given("I am on the sign up page", ()=>{
  cy.visit("https://dev-rhipe-signup.azurewebsites.net/ ")

})

When("I fill in the form details", ()=>{
    cy.get(".entry-title").should('have.text',"Sign up with Rhipe")
})

Then("I should see a success message for customer signed up",()=>{
    cy.get(".entry-title").should('have.text',"Sign up with Rhipe")
})