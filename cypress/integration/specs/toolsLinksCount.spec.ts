it('Count links inside Tools drop down', () => {
    cy.get('#menu-main-menu').contains('li', 'Tools').trigger('mouseover');
    cy.get('ul.dropdown-menu li').should('have.length', 14);
});