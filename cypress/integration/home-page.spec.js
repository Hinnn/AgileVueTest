describe('Home page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Shows a header', () => {
    cy.get('.vue-title').should('contain', 'Homer for Customer !!');
  });

  describe('Navigation bar', () => {
    it('Shows the required links', () => {
      // cy.get('.navbar').find('[data-test=bookbtn]')
      cy.get('.navbar').contains('Home')
      cy.get('.navbar-nav:nth-child(1)').within(() => {
        cy.get('.nav-item:first').should('contain', 'Home')
        cy.get('.nav-item:nth-child(2)').should('contain', 'Room')
        cy.get('.nav-item:nth-child(3)').should('contain', 'Bookings')
        cy.get('.nav-item:nth-child(4)').should('contain', 'Book')
        cy.get('.nav-item:nth-child(5)').should('contain', 'Edit')
      })
      cy.get('.navbar-nav:nth-child(2)').within(() => {
        cy.get('.nav-item:first').should('contain', 'About')
        cy.get('.nav-item:nth-child(2)').should('contain', 'Contact')
      })
    })

    it('Redirects when links are clicked', () => {
      // cy.get('[data-test=bookbtn]').click();
      // cy.get('.navbar').contains('Book').click();
      // cy.url().should('include', '/book')
      cy.get('.navbar').contains('Room').click();
      cy.url().should('include', '/room')
      cy.get('.navbar').contains('Manage').click();
      cy.url().should('include', '/bookings')
      // etc
    });
  })
});
