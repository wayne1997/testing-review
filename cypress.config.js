const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/testing/**/**/*.cy.js",
    baseUrl: 'https://www.demoblaze.com',
    apiUrl: 'https://api.demoblaze.com'
  }
});
