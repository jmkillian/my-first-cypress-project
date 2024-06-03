const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    username: 'Gingerz346@gmail.com',
    password: 'YRbr3RJy@5YrNw'
  }
});
