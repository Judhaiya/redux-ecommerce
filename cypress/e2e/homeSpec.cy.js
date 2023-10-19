describe("testing login functionality", () => {
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

describe("testing search functionality", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    cy.get('[data-cy="username-input"]').type("kminchelle");
    cy.get('[data-cy="password-input"]').type("0lelplR");
    cy.get('[data-cy="btn-submit"]').click();
  });
  it("input text searched should resemble the product category name", () => {
    cy.get('[data-cy="search-input-box"]').type("phone");
    cy.get('[data-cy="search-button"]').click();
    cy.wait(1500);

    cy.get('[data-cy="product-title"]').eq(0).should("have.text", "iPhone 9");
    cy.get('[data-cy="product-title"]').eq(1).should("have.text", "iPhone X");
    cy.get('[data-cy="product-title"]')
      .eq(2)
      .should("have.text", "Women Shoulder Bags");
    cy.get('[data-cy="product-title"]')
      .eq(3)
      .should("have.text", "Bluetooth Aux");
    cy.get('[data-cy="single-product-card"]').first().click();
    cy.location("pathname").should("eq", "/singleProduct/1");
   });
  
});

describe("testing navigation to cart page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    cy.get('[data-cy="username-input"]').type("kminchelle");
    cy.get('[data-cy="password-input"]').type("0lelplR");
    cy.get('[data-cy="btn-submit"]').click();
  });
  it("on clicking cart icon,it should navigate to cart page", () => {
    cy.get('[data-cy="shopping-cart"]').click();
    cy.location("pathname").should("eq", "/cart");
  });
});

describe("testing navigation to login page after logging out", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    cy.get('[data-cy="username-input"]').type("kminchelle");
    cy.get('[data-cy="password-input"]').type("0lelplR");
    cy.get('[data-cy="btn-submit"]').click();
  });
  it("on clicking logout button,navigate to login page", () => {
    cy.get('[data-cy="logout-button"]').click();
    cy.location("pathname").should("eq", "/");
  });
});

describe("testing add to cart functionality", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    cy.get('[data-cy="username-input"]').type("kminchelle");
    cy.get('[data-cy="password-input"]').type("0lelplR");
    cy.get('[data-cy="btn-submit"]').click();
  });
  it("after clicking add to cart button ,the toaster content should be items added to cart", () => {
   cy.get('[data-cy="cart-button"]').first().click()
   cy.get(".MuiSnackbarContent-message").should('have.text',"products has been added to cart successfully")
  });
});
