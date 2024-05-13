describe("Check the cart page", () => {
    beforeEach(() => {
        cy.visit('/cart.html');
    });
    it('Show navigate to the cart page', () => {
        cy.contains('Products').should('be.visible');
        cy.get('.table').should('be.visible');
        cy.get('.table').children().should('have.length', 2);
    });

    it('Should complete correctly the shopping form', () => {
        cy.get('.btn-success').click();
        cy.get('.modal').should('be.visible');
        cy.get('#name').type('Alexander');
        cy.get('#country').type('Ecuador');
        cy.get('#city').type('Riobamba');
        cy.get('#card').type('12345678434');
        cy.get('#month').type('Mayo');
        cy.get('#year').type('2021');
    });

    it('Should complete the purcharse completely', () => {
        cy.get('.btn-success').click();
        cy.get('#name').type('Alexander');
        cy.get('#country').type('Ecuador');
        cy.get('#city').type('Riobamba');
        cy.get('#card').type('12345678434');
        cy.get('#month').type('Mayo');
        cy.get('#year').type('2021');
        cy.contains('button', 'Purchase').click();
    });
})