describe("Anecdotes", function () {
  it("front page can be opened", function () {
    cy.visit("http://localhost:3001");
    cy.contains("Anecdotes");
    cy.contains(
      "If it hurts, do it more often"
    );
  });
  it("voting is working", function () {
    cy.visit("http://localhost:3001");
    cy.contains("vote").click();
    cy.contains("you voted");
  });
});
