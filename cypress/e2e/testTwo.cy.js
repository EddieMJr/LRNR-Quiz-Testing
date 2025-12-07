it("shows navigation links", () => {
  cy.visit("http://localhost:5173/");
  cy.contains("Quiz Generation").should("exist");
});
