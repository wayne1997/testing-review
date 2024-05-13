describe("Add two items to the cart", () => {
    it('Should add the second item to the cart', () => {
        cy.visit('/prod.html?idp_=1');
        cy.get('#tbodyid').contains('Samsung galaxy s6').should('be.visible').then(() => {
            cy.contains('a', 'Add to cart').click();
        });
    });
    it('Should add the second item to the cart', () => {
        cy.visit('/prod.html?idp_=2');
        cy.get('#tbodyid').contains('Nokia lumia 1520').should('be.visible').then(() => {
            cy.contains('a', 'Add to cart').click();
        });
    });
    afterEach(() => {
        cy.visit('/cart.html');
    });
});