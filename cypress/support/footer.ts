Cypress.Commands.add('footer', () => {
  cy.get('footer > ul > li').first().contains('©2024');
  cy.get('footer > ul > li > a').as('footerItems');
  cy.get('@footerItems');
  cy.get('@footerItems').each(function ($li, $index) {
    cy.wrap($li)
      .invoke('attr', 'href')
      .then(function ($link) {
        expect($link).to.equal(this.dataFooter.footer[$index].link);
      });
  });
});
