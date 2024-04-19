Cypress.Commands.add('newsletter', () => {
  cy.get('[data-cy=newsletter]').within(function () {
    cy.get('p').first().should('have.text', 'Newsletters');
    cy.get('h3').should('have.text', 'Stories and interviews');

    cy.get('button[type=submit]').as('btnSubmit');
    cy.get('form>input[type=email]').as('inputNews');

    cy.get('@btnSubmit').should('not.be.disabled');

    cy.get('@inputNews').should('have.text', '');
    cy.get('@inputNews').should('not.have.value');

    cy.get('@btnSubmit').click({ timeout: 500 });
    cy.get('@btnSubmit').should('be.disabled');
    cy.get("[data-cy='error']")
      .should('have.text', 'Please provide a valid email, Value is too short')
      .and('have.class', 'text-red-600 peer');

    cy.get('input[placeholder*="Enter your email"]');

    cy.get('@inputNews').type('z@g');
    cy.get('@btnSubmit').click();
    cy.get("[data-cy='error']")
      .should('have.text', 'Please provide a valid email')
      .and('have.class', 'text-red-600 peer');
    cy.get('@inputNews').clear();

    cy.get('@inputNews').type('daniel.aghababaei@gmail.com');
    cy.get('@btnSubmit').click();
    cy.get("[data-cy='success']")
      .should('have.text', 'Thank you for subscribing to our newsletter! 🎉')
      .and('have.class', 'text-green-600 peer');

    cy.get('p')
      .last()
      .should('have.text', 'We care about your data in our privacy policy');
    cy.get('a')
      .invoke('attr', 'href')
      .then(function ($link) {
        expect($link).to.be.equal('/privacy-policy');
      });
  });
});
