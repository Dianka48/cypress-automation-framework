/// <reference types="Cypress" />

describe("Verify checkboxes via webdriveruni", () => {
  beforeEach(() => {
    // cy.visit("/");
    // cy.navigateToWebdriverUni();
    // cy.get("#dropdown-checkboxes-radiobuttons")
    //   .invoke("removeAttr", "target")
    //   .click();
    // cy.log(Cypress.env("name"));
    cy.navigateToWebdriverUniCheckboxPage();
  });

  it("Check and validate checkbox", () => {
    // cy.visit("https://webdriveruniversity.com/");
    // cy.get("#dropdown-checkboxes-radiobuttons")
    //   .invoke("removeAttr", "target")
    //   .click();

    // cy.get("#checkboxes > :nth-child(1) > input").check();
    // cy.get("#checkboxes > :nth-child(1) > input").check().should("be.checked");

    cy.get("[value='option-1']").as("option-1");
    // cy.get("@option-1").check();
    cy.get("@option-1").check().should("be.checked");
  });

  it("Uncheck and validate checkbox", () => {
    // cy.visit("https://webdriveruniversity.com/");
    // cy.get("#dropdown-checkboxes-radiobuttons")
    //   .invoke("removeAttr", "target")
    //   .click();

    cy.get("[value='option-3']").as("option-3");
    // cy.get("@option-1").check();
    cy.get("@option-3").uncheck().should("not.be.checked");
  });

  it("Check multiple checkboxes", () => {
    // cy.visit("https://webdriveruniversity.com/");
    // cy.get("#dropdown-checkboxes-radiobuttons")
    //   .invoke("removeAttr", "target")
    //   .click();

    cy.get('input[type="checkbox"]')
      .check(["option-1", "option-2", "option-3", "option-4"])
      .should("be.checked");
  });
});
