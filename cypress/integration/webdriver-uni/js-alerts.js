/// <reference types="Cypress" />

describe("Handle js alerts", () => {
  it("Confirm js alert contains the correct text", () => {
    // cypress code
    cy.visit("https://webdriveruniversity.com/");
    cy.get("#popup-alerts").invoke("removeAttr", "target").click();
    cy.get("#button1").click();

    cy.on("window:alert", (str) => {
      expect(str).to.equal("I am an alert box!");
    });
  });

  it("Validate js confirm alert box works correctly when clicking ok", () => {
    // cypress code
    cy.visit("https://webdriveruniversity.com/");
    cy.get("#popup-alerts").invoke("removeAttr", "target").click();
    cy.get("#button4").click();

    cy.on("window:confirm", (str) => {
      return true;
    });
    cy.get("#confirm-alert-text").should("contain", "You pressed OK!");
  });

  it("Validate js confirm alert box works correctly when clicking cancel", () => {
    // cypress code
    cy.visit("https://webdriveruniversity.com/");
    cy.get("#popup-alerts").invoke("removeAttr", "target").click();
    cy.get("#button4").click();

    cy.on("window:confirm", (str) => {
      return false;
    });
    cy.get("#confirm-alert-text").should("contain", "You pressed Cancel!");
  });

  it.only("Validate js confirm alert box using a stub", () => {
    // cypress code
    cy.visit("https://webdriveruniversity.com/");
    cy.get("#popup-alerts").invoke("removeAttr", "target").click();

    const stub = cy.stub();
    cy.on("window:confirm", stub);

    cy.get("#button4")
      .click()
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith("Press a button!");
      })
      .then(() => {
        return true;
      })
      .then(() => {
        cy.get("#confirm-alert-text").should("contain", "You pressed OK!");
      });
  });
});
