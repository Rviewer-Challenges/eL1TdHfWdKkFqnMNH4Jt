describe("TwitterApp", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });
  it("frontpage can be opened", () => {
    cy.contains("For you");
    cy.contains("Following");
  });
  it("textarea contains", () => {
    cy.get("textarea").should("have.value", "");
  });
  it("textarea can be opened", () => {
    cy.contains("Post").click();
  });
  it("user can  create a post", () => {
    cy.contains("Post").click();
    cy.get('[placeholder="What its happening?!"]').type('hello');
    cy.contains("Post").click();
  });

});
