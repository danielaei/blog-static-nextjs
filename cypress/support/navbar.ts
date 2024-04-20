Cypress.Commands.add('navbar', () => {
  cy.get('header>nav').within(function () {
    cy.get('[data-cy=logo]')
      .invoke('attr', 'href')
      .then(function ($link) {
        expect($link).to.be.equal('/');
      });
    cy.get('ul>li>a').each(function ($link) {
      expect($link.text()).to.be.oneOf(['Blog', 'Posts', 'About', 'Newsletter']);
      expect($link.attr('href')).to.be.oneOf(['/', '/posts', '/about', '#newsletter']);
    });
  });
});
