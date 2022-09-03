import AutoStore_PO from "../../support/pageObjects/automation-test-store/AutoStore_PO";
import AutoStoreHairCare_PO from "../../support/pageObjects/automation-test-store/AutoStoreHairCare_PO";
/// <reference types="Cypress" />

describe("Add multiple items to basket", () => {
  const homepage = new AutoStore_PO();
  const hairCare = new AutoStoreHairCare_PO();

  before(() => {
    cy.fixture("products").then((data) => {
      globalThis.data = data;
    });
  });

  beforeEach(() => {
    // Cypress does this automatically before each test
    // cy.clearLocalStorage();
    // cy.clearCookies();
    homepage.visitHomepage();
    homepage.clickHairCareLink();
  });

  it("Add specific items to basket", () => {
    // globalThis.data.productName.forEach((name) => {
    //   cy.addProductToBasket(name);
    // });

    // cy.get(".dropdown.hover .fa-shopping-cart")
    //   .first()
    //   .next()
    //   .invoke("text")
    //   .should("equal", "3");
    hairCare.addHairCareProductsToBasket();
  });
});
