import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";

Given("I am on the sign up page", () => {
  cy.visit(Cypress.env("prodUrl"));
  cy.get("h1").should("have.text", "Sign Me Up ");

  //cy.visit(Cypress.env("devUrl"));
  //cy.get(".entry-title").should('have.text',"Sign up with Rhipe")
});

When("I fill in the valid form details from below:", (customerInfoTable) => {
  customerInfoTable.hashes().forEach((customerEntry) => {
    cy.log(customerEntry["Customer Name"]);
    cy.get("#CustomerName").type(customerEntry["Customer Name"]);
    cy.get("#RegistrationNumber").type(customerEntry["Registration No"]);
    cy.get("#Street1").type(customerEntry["StreetAddress1"]);
    cy.get("#Street2").type(customerEntry["StreetAddress2"]);
    cy.get("#Street3").type(customerEntry["StreetAddress3"]);
    cy.get("#City").type(customerEntry["City"]);
    cy.get("#State").type(customerEntry["State"]);
    cy.get("#Country").select(customerEntry["Country"]);
    cy.get("#Postcode").type(customerEntry["Postcode"]);
    cy.get("#MainPhone").type(customerEntry["Main Phone"]);
    cy.get("#Fax").type(customerEntry["Fax"]);
    cy.get("#WebUrl").type(customerEntry["Website"]);
    cy.get("#Email").type(customerEntry["Email"]);
    cy.get("#Source").select(customerEntry["Source"]);
    cy.get("#IndustryType").select(customerEntry["Industry"]);

    cy.get("#PrimaryContactFirstName").type(customerEntry["FirstName"]);
    cy.get("#PrimaryContactLastName").type(customerEntry["LastName"]);
    cy.get("#PrimaryContactPhone").type(customerEntry["Direct Phone"]);
    cy.get("#PrimaryContactJobTitle").type(customerEntry["Job Title"]);
    cy.get("#PrimaryContactEmail").type(customerEntry["PrimaryEmail"]);
  });
});

And("Click on the Sign Up button", () => {
  //SK - Skipping the click of Sign Up button as per the case study requirement
  cy.get("#submitbutton");
});

Then("I should see a success message for customer signed up", () => {
  //SK - Here we can put an assertion to see a success message or Title of next page
});
