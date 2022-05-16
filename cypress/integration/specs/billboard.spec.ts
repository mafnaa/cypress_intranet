describe.only('Billboard test', () => {
    before('authenticate', () => {
        cy.authenticate()
    });

    it('Billboard ad counter displays correct amount of ads', () => {
        cy.visit(Cypress.env('baseUrl') + 'billboard');

        cy.get('.products .product-category').as('products')
            .each(($ad, index) => {
                cy.get('@products').eq(index).find('.count')
                    .invoke('text')
                    .invoke('match', /\d+/)
                    .then((regEx) => {
                        const adCount = parseInt(regEx.toString())
                        cy.get('@products').eq(index).click();
                        cy.get('.products li')
                            .should('have.length.within', adCount % 15, 15)
                            .should('have.length', adCount % 15)
                            .and('have.length.at.most', 15);
                    })
                cy.go('back');
            })
    })

});