// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', () => {
    cy.visit('https://thinking-tester-contact-list.herokuapp.com')
    cy.get('#email').type('Gingerz346@gmail.com')
    cy.get('#password').type('YRbr3RJy@5YrNw')
    cy.get('#submit').click()
})
Cypress.Commands.add('addContact', (random) => {
    cy.get('#add-contact').click()
    cy.get('#firstName').type('Test' + random)
    cy.get('#lastName').type('User2')
    cy.get('#birthdate').type('1995-05-02')
    cy.get('#email').type('Test2.User2@bar.com')
    cy.get('#phone').type('3333332222')
    cy.get('#street1').type('334 Palm Dr.')
    cy.get('#street2').type('Apt 5')
    cy.get('#city').type('Rockaway')
    cy.get('#stateProvince').type('CA')
    cy.get('#postalCode').type('44566')
    cy.get('#country').type('USA')
    cy.get('#submit').click()
})

Cypress.Commands.add('deleteContact', (random) => {
//    cy.contains('Test' + random + ' User2').click()
    cy.get('#delete').click()
    cy.on('window:confirm', () => true)
//    cy.get('.contactTableBodyRow').contains('Test' + random + 'User2').should('not.exist')
})
