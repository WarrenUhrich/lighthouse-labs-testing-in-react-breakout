describe('deep element finding tests', () => {
    it('find deep element after hover', () => {
        // cy.visit('https://edmontonjournal.com/');

        // cy.get('.sailthru-overlay-close')
        //   .click();

        // cy.get('.primary-menu__control-button')
        //   .click();

        // cy.get('.header-menu-nav__item-text')
        //   .contains('Subscribe');

        cy.visit('https://www.w3schools.com/');

        cy.get('#navbtn_tutorials')
          .click();

        cy.get('.w3-bar-item')
          .contains('Learn React');
    });
});
