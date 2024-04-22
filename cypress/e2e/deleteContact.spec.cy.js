describe('Add Contact Test then delete it', () => {  // arrow function is shorthand to get one function to call another
it('Delete a new contact', () => {
  // Create a random number
  let random = Math.floor(Math.random() * 1000)
    cy.login()
    cy.addContact(random)
    // Go to contacts details page:
    cy.deleteContact(random)
    //    cy.get('#logout').click()
  })
})