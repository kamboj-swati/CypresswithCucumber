const cucumber = require('cypress-cucumber-preprocessor').default
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    devUrl: 'https://dev-rhipe-signup.azurewebsites.net/',
    prodUrl: 'https://www.rhipe.com/sign-me-up/'
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor',cucumber())
    },
    specPattern: "cypress/e2e/*.feature",
  },
});
