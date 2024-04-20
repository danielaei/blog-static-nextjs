describe('Article List', () => {
  beforeEach(function () {
    cy.visit('http://localhost:3000');
    cy.fixture('footer.json').as('dataFooter');
  });
  it('Should display navbar and links works', () => {
    cy.navbar();
  });
  it('should display a list of articles', () => {
    cy.articles();
  });
  it('should display a list of articles on the sidebar', () => {
    cy.aside();
  });
  it('should display newsletter', () => {
    cy.newsletter();
  });
  it('should display links on footer', () => {
    cy.footer();
  });
});
