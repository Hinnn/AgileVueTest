
describe('Manage Bookings page', () => {
  beforeEach(() => {
    // Delete all bookings in the API's datastore
    cy.request('http://localhost:3000/')
      .its('body')
      .then((bookings) => {
        bookings.forEach((element) => {
          cy.request('DELETE',
            'http://localhost:3000/' + element.customerID)
        })
      })
    // Populate API's datastore
    cy.fixture('bookings')
      .then((bookings) => {
        bookings.forEach((booking) => {
          cy.request('POST',
            'http://localhost:3000/', booking)
        })
      })
    cy.visit('/')
    // Click Manage Donations navbar link
    cy.get('.navbar-nav:nth-child(1)')
      .find('.nav-item:nth-child(2)').click()
  })

  it('allows a booking to be deleted', () => {
    cy.get('tbody').find('tr').should('have.length', 4)
    // Click trash/delete link of 4rd donation in list
    cy.get('tbody').find('tr:nth-child(4)').find('td:nth-child(8)').click()
    // Click confirmation button
    cy.get('button').contains('Delete').click()
    cy.get('tbody').find('tr').should('have.length', 3)
  })
})
