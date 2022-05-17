describe('News Search test', () => {
    it('Search can find news by exact match', () => {
        cy.searchPostsByName('Riga Marathon 2022', 'Riga Marathon 2022 (14-15 MAY)');
        cy.go('back');
        cy.searchPostsByName('Promotion statistics Q1 2022', 'Promotion statistics Q1 2022');
    })

});