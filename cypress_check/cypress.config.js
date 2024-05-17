const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'test-results/results-json',
    overwrite: false,
    charts: true,
    reportFilename: 'Cypress Training',
    showHooks: true,
    showPassed: true,
    showFailed: true,
    showPending: true,
    showSkipped: true,
    autoOpen: false,
    code: true,
    reportPageTitle: 'Cypress Automation Training',
    reportTitle: 'Cypress Automation',
    timestamp: 'longDate',
    html: true,
    json: true,
  },
  e2e: {
    baseUrl : "https://opensource-demo.orangehrmlive.com/web/index.php/auth/",
    viewportWidth : 1280,
    viewportHeight : 720, 
    video : false,
    videoCompression : 32,
    screenshots : false,
    watchForFileChanges : false,
    retries: 0,
    defaultCommandTimeout : 6000,


    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
