describe('deep element finding tests', () => {
    it('find deep element after hover', () => {
        cy.visit('https://www.w3schools.com/');

        cy.get('#navbtn_tutorials')
          .click();

        cy.get('.w3-bar-item')
          .contains('Learn React');
    });
});
