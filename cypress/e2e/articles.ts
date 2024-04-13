describe("Article List", () => {
  it("should display a list of articles", () => {
    cy.visit("http://localhost:3000");
    cy.articles()
  });
});