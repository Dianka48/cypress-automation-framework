/// <reference types="Cypress" />

describe("Validate webdriveruni homepage links", () => {
  it("Confirm link redirect to the correct pages", () => {
    // cypress code
    cy.visit("https://webdriveruniversity.com/");
    cy.get("#contact-us").invoke("removeAttr", "target").click();
    cy.url().should("include", "contactus");

    cy.go("back").url().should("not.include", "contactus");
    cy.reload();
    // cy.reload(true) // reload without using cache

    cy.go(1).url().should("include", "contactus");
    cy.go(-1);

    cy.get("#login-portal").invoke("removeAttr", "target").click();
    cy.url().should("include", "Login-Portal");
    cy.go(-1);

    cy.get("#to-do-list").invoke("removeAttr", "target").click();
    cy.url().should("include", "To-Do-List");
    cy.go(-1);
  });
});
