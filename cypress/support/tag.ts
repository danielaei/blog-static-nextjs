Cypress.Commands.add('tags', ($tags) => {
  cy.wrap($tags)
    .get('[data-cy="tags"]')
    .children()
    .each(($tag) => {
      const textContent = $tag.text().trim();
      expect(textContent).to.not.be.empty;
    });
});
