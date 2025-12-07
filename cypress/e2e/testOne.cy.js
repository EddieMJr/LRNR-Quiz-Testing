describe("Homepage", () => {
  it("loads the homepage", () => {
    cy.visit("http://localhost:5173/");

    // Check for something that exists on your homepage
    cy.contains("lrnr").should("be.visible");
  });
});
