/// <reference types="Cypress" />

describe("Verify autocomplete dropdown lists via webdriveruni", () => {
  it("Select specific product via autocomplete list", () => {
    cy.visit("https://webdriveruniversity.com/");
    cy.get("#autocomplete-textfield").invoke("removeAttr", "target").click();

    cy.get("#myInput").as("input");
    cy.get("@input").type("P");
    const productToSelect = "Pancakes";
    cy.get("#myInputautocomplete-list > *").as("list");
    cy.get("@list").contains(productToSelect).click();
    cy.get("#submit-button").click();
    // cy.get("#myInputautocomplete-list > *").each((el, index, list) => {
    //   const product = el.text();

    //   if (product === productToSelect) {
    //     el.click()

    //     cy.get('#submit-button').click()
    //   }
    // });
    cy.url().should("include", productToSelect);

    const secondProductToSelect = "Grapes";
    cy.get("@input").type("G");
    cy.get("@list").contains(secondProductToSelect).click();
    cy.get("#submit-button").click();
    cy.url().should("include", secondProductToSelect);
  });
});
