describe('Book page', () => {
  beforeEach(() => {
    cy.visit('/')
    // Click Book navbar link
    cy.get('.navbar-nav:nth-child(1)')
      .find('.nav-item:nth-child(4)').click()
  })

  it('allows a valid booking to be submitted', () => {
    // Fill out web form
    cy.get('#paymenttype').select('Visa')
    // cy.get('input [customerID]').type(32165434)
    cy.get('.col-md-6').find(':nth-child(2)').find('.form__input').type(321654)
    cy.get('.col-md-6').find(':nth-child(3)').find('.form__input').type(20190105)
    cy.get('.col-md-6').find(':nth-child(4)').find('.form__input').type(1)
    // cy.get('label').contains('Message').next().type('Best wishes');
    cy.get('#roomNum').select('101')
    // cy.contains('Thanks for your Booking').should('not.exist')
    cy.get('.error').should('not.exist')
    cy.get('button[type=submit]').click()
    cy.contains('Thanks for your Booking!').should('exist')
  })

  it('shows error messages for incomplete form fields', () => {
    cy.get('button[type=submit]').click()
    cy.get('.error').contains('Amount')
    cy.get('input[data-test=amount]').type(1)
    // cy.get('.error').contains('Message')
    cy.get('.error').contains('Amount').should('not.exist')
    // cy.get('label').contains('Message').next().type('Best wishes');
    cy.get('.error').should('not.exist')
  })
})
