
describe("check login happens successfully", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });
  it("on login it should navigate to home", () => {
    cy.get('[data-cy="username-input"]').type("kminchelle");
    cy.get('[data-cy="password-input"]').type("0lelplR");
    cy.get('[data-cy="btn-submit"]').click();
    cy.location("pathname").should("eq", "/home");

    cy.get('[data-cy="username"]')
      .contains("kminchelle")
      .should((elem) => {
        expect(elem.text()).to.equal("kminchelle");
      });
  });
});
