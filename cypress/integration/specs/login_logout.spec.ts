describe('Login-logout test', () => {

    it('Logs in and logs out from intranet', () => {
        // Authenticate
        cy.visit(Cypress.env('baseUrl'));
        cy.get('#username').type(Cypress.env('usar'));
        cy.get('#password').type(Cypress.env('pazz'), {log: false});
        cy.contains('Login').click();
        // Assert successful login
        cy.get('#profile a').should('have.attr', 'data-bp-tooltip', 'Maxim Fominih');

        // Log out
        cy.get('.logout-button').click();
        // Assert successful logout
        cy.get('h2').contains('Logout successful')
    })

    it('fails to log in with wrong password', () => {
        // Attempt to authenticate
        cy.visit(Cypress.env('baseUrl'));
        cy.get('#username').type(Cypress.env('usar'));
        cy.get('#password').type('wrong password');
        cy.contains('Login').click();
        // Assert failed login message (exact match)
        cy.get('#msg.errors').should('have.text', 'Invalid credentials.');
    });
});