Cypress.Commands.add('aside', () => {
  cy.get('article>figure').first().click();
  cy.get('aside').within(function () {
    cy.articles();
  });
});
