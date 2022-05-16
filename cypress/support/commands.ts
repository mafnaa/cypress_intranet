Cypress.Commands.add('authenticate', () => {
    cy.visit(Cypress.env('baseUrl') + 'billboard');
    cy.get('#username').type(Cypress.env('usar'));
    cy.get('#password').type(Cypress.env('pazz'), {log: false});
    cy.contains('Login').click();
});
