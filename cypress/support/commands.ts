Cypress.Commands.add('authenticate', () => {
    cy.visit(Cypress.env('baseUrl'));
    cy.get('#username').type(Cypress.env('usar'));
    cy.get('#password').type(Cypress.env('pazz'), {log: false});
    cy.contains('Login').click();
});

Cypress.Commands.add('searchPostsByName', (searchString: string, exactName: string) => {
    cy.intercept('https://intranet.ctco.lv/wp/wp-admin/admin-ajax.php').as('searchRequest');
    cy.get('#nav-menu-item-search').click();
    cy.get('#ajax_search_container').within(() => {
        cy.get('input').type(searchString).wait('@searchRequest');
        cy.get('.ajax_search_content').contains('a', exactName).click();

    })
    cy.get('article .article-title').should('have.text', exactName);
});
