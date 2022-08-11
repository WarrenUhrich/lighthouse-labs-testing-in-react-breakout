describe('Counter component tests', () => {

    it('renders the Counter button', () => {

        cy.visit('http://localhost:3000');

        cy.get('button')
          .should('be.visible');

    });

    it('updates the count state on click', () => {
        cy.visit('http://localhost:3000');

        cy.get('button')
          .click()
          .should('have.text', 'Clicked 1 Times!');
    });

});
