/// <reference types="Cypress" />

describe("Test File Upload via webdriveruni", () => {
  it("Upload a file...", () => {
    cy.visit("https://webdriveruniversity.com/");
    cy.get("#file-upload").invoke("removeAttr", "target").click();

    cy.fixture("hamster.jpg", "base64").then((fileContent) => {
      cy.get("#myFile").attachFile(
        {
          fileContent,
          fileName: "hamster.jpg",
          mimeType: "image/jpg",
        },
        {
          uploadType: "input",
        }
      );
    });
    cy.get("#submit-button").click();
  });

  it("Upload no file...", () => {
    cy.visit("https://webdriveruniversity.com/");
    cy.get("#file-upload").invoke("removeAttr", "target").click();

    cy.get("#submit-button").click();
  });
});
