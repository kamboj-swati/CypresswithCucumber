import { Given, When, Then} from "cypress-cucumber-preprocessor/steps";

Given("I am on the sign up page", ()=>{
  cy.visit("https://www.rhipe.com/sign-me-up/")
  //cy.get(".entry-title").should('have.text',"Sign up with Rhipe")

})

When("I fill in the valid form details:", (customerInfoTable)=>{
  
  customerInfoTable.hashes().forEach(customerEntry => {
    cy.log(customerEntry["Customer Name"])
    cy.get('#CustomerName').type(customerEntry["Customer Name"])
    cy.get('#RegistrationNumber').type(customerEntry["Registration No"])
    cy.get('#Street1').type(customerEntry["StreetAddress1"])
    cy.get('#Postcode').type(customerEntry["Postcode"])
  });
  
})

Then("I should see a success message for customer signed up",()=>{
    
})