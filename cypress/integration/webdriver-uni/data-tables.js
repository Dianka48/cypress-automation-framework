/// <reference types="Cypress" />

describe("Handling data via webdriveruni", () => {
  beforeEach(() => {
    cy.visit("http://webdriveruniversity.com/");
    cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
  });

  it("Calculate and assert the total age of all users", () => {
    const userDetails = [];
    let numb = 0;
    cy.get("#thumbnail-1 td")
      .each((el, index, list) => {
        userDetails.push(el.text());
      })
      .then(() => {
        userDetails.forEach((string) => {
          //   cy.log(string);
          if (!isNaN(string)) {
            numb += Number(string);
          }
          //   if (Number(string)) {
          //     numb += Number(string);
          //   }
        });
        expect(numb).equal(322);
      });
  });

  it.only("Calculate and assert the age of a given user based on last name", () => {
    cy.get("#thumbnail-1 tr td:nth-child(2)").each((element, index, list) => {
      const lastName = element.text();
      if (lastName === "Woods") {
        cy.wrap(element).next().should("contain", 80);
      }
    });
  });
});
