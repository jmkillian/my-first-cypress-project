// This isn't a test, just in test format
describe('Element locator practice', () => {
    it('Can locate an element six different ways', () => {
        cy.visit('https://thinking-tester-contact-list.herokuapp.com')

        // locate an element by id
        cy.get('#email').type('Gingerz346@gmail.com')

        // locate element by type
        cy.get("[type = 'password']").type('YRbr3RJy@5YrNw')

        // locate element by text
        cy.contains('Submit').click()

        // locate element by class
        cy.get('.logout').click()

        // Locate an element by css - Cascading style sheet
        cy.get('input').first().type('Gingerz346@gmail.com')

        // Locate an identifier used in Selenium or playwright, using xpath
        // not supported in Cypress
        // cy.get('//form/p[2]/input').type('YRbr3RJy@5YrNw')

        // Best way to get locator, data automation id
        // Use when my app does not have any ids
        // add data-cy labels and try to get developers to add to code
        //cy.get('[data-cy="submit"]').click()
    })
})