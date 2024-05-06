describe('Add Contact Tests', () => {  // arrow function is shorthand to get one function to call another
 it('Can add a new contact', () => {
  // Create a random number
  let random = Math.floor(Math.random() * 1000)
    cy.login()
    cy.addContact(random)
    cy.contains('Test' + random + ' User2').click()
    // Use template literal - Use backtick to use a variable
    cy.get('#firstName').should('contain', `Test${random}`)
    cy.get('#lastName').should('contain', 'User2')
    cy.get('#birthdate').should('contain', '1995-05-02')
    cy.get('#email').should('contain', 'test2.user2@bar.com')
    cy.get('#phone').should('contain', '3333332222')
    cy.get('#street1').should('contain', '334 Palm Dr.')
    cy.get('#street2').should('contain', 'Apt 5')
    cy.get('#city').should('contain', 'Rockaway')
    cy.get('#stateProvince').should('contain', 'CA')
    cy.get('#postalCode').should('contain', '44566')
    cy.get('#country').should('contain', 'USA')
    cy.deleteContact(random)

    cy.get('.contactTableBodyRow').contains('Test' + random + 'User2').should('not.exist')
    cy.get('#logout').click()
  })

  it('Returns an error when required field is missing', () => {
    cy.login()
    cy.get('#add-contact').click()
    cy.get('#firstName').type('Petunia')
    // leave all other fields blank
    cy.get('#submit').click()
    cy.get('#error').should('contain', 'Contact validation failed: lastName')
    cy.get('#cancel').click()
    cy.get('#logout').click()
    })
})
