import HomePage_PO from "../../support/pageObjects/webdriver-uni/Homepage_PO";
import ContactUs_PO from "../../support/pageObjects/webdriver-uni/ContactUs_PO";
/// <reference types="Cypress" />

describe("Test contact us form via WebdriverUni", () => {
  Cypress.config("defaultCommandTimeout", 20000);
  const homepage = new HomePage_PO();
  const contactUsPage = new ContactUs_PO();

  before(() => {
    // cy.viewport(550, 750);
    cy.fixture("example").then((data) => {
      // this.data = data;
      globalThis.data = data;
    });
  });

  beforeEach(() => {
    // cy.visit(
    //   Cypress.env("webdriveruni_homepage") + "/Contact-Us/contactus.html"
    // );
    // cy.visit("/Contact-Us/contactus.html");
    // cy.visit("/");
    // cy.get("#contact-us").invoke("removeAttr", "target").click();

    homepage.visitHomepage();
    // cy.wait(3000);
    homepage.clickContactUsButton();
    // cy.pause();
  });

  it("Should be able to submit a successful submission via contact us form", () => {
    // cypress code

    cy.document().should("have.property", "charset").and("eq", "UTF-8");
    cy.title().should("include", "WebDriver | Contact Us");
    cy.url().should("include", "contactus");

    contactUsPage.contactFormSubmission(
      Cypress.env("first_name"),
      data.last_name,
      data.email,
      "Test comment",
      "h1",
      "Thank You for your Message!"
    );
    // cy.get('[name="first_name"]').type(data.first_name);
    // cy.get('[name="last_name"]').type(data.last_name);
    // cy.get('[name="email"]').type(data.email);
    // cy.get("textarea.feedback-input").type("Test comment");
    // cy.get('[type="submit"]').click();
    // cy.get("h1").should("have.text", "Thank You for your Message!");
  });

  it.only("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
    // cy.webdriverUniContactFormSubmission(
    //   data.first_name,
    //   data.last_name,
    //   " ",
    //   "Test comment",
    //   "body",
    //   "Error: Invalid email address"
    // );
    if (Cypress.isBrowser("firefox")) {
    } else {
      contactUsPage.contactFormSubmission(
        data.first_name,
        data.last_name,
        " ",
        "Test comment",
        "body",
        "Error: Invalid email address"
      );
    }
  });
});
