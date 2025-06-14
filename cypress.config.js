// cypress.config.js

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // Base URL for the application under test
    baseUrl: "https://the-internet.herokuapp.com",
    env: {
      username: "tomsmith",
      password: "SuperSecretPassword!",
    },

    // Viewport settings
    viewportWidth: 1280,
    viewportHeight: 720,

    // Test file patterns
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",

    // Screenshots and videos configuration
    screenshotOnRunFailure: true,
    video: true,
    videosFolder: "cypress/videos",
    screenshotsFolder: "cypress/screenshots",

    // Timeouts
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 30000,

    // Retry configuration
    retries: {
      runMode: 2,
      openMode: 0,
    },

    // Browser settings
    chromeWebSecurity: false,

    // Test isolation
    testIsolation: true,
  },
});
