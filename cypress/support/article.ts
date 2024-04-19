Cypress.Commands.add('article', ($article) => {
  cy.wrap($article).get('h2').should('exist').and('not.be.empty');
  cy.wrap($article).get('figcaption').should('exist').and('not.be.empty');
  cy.wrap($article).get('[data-cy=writer]').should('exist').and('not.be.empty');
  cy.wrap($article).get('[data-cy=date]').should('exist').and('not.be.empty');
  cy.wrap($article).get('img').should('be.visible').should('have.attr', 'alt').should('have.length.gt', 0);
  cy.tags($article);
});
Cypress.Commands.add('articles', () => {
  cy.get('article>figure').each(function ($article) {
    cy.wrap($article).within(function ($article) {
      cy.article($article);
    });
  });
});
