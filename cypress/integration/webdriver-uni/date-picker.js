/// <reference types="Cypress" />

describe("Test Date Picker via webdriveruni", () => {
  it("Select date from datepicker", () => {
    cy.visit("https://webdriveruniversity.com/");
    cy.get("#datepicker").invoke("removeAttr", "target").click();
    cy.get("#datepicker").click();

    // const date1 = new Date();
    // date1.setDate(date1.getDate());
    // cy.log(date1.getDate());

    // let date2 = new Date();
    // date2.setDate(date2.getDate() + 5);
    // cy.log(date2.getDate());

    const date = new Date();
    date.setDate(date.getDate() + 360);

    const futureYear = date.getFullYear();
    const futureMonth = date.toLocaleDateString("default", { month: "long" });
    const futureDay = date.getDate();

    cy.log("future year ", futureYear);
    cy.log("future month ", futureMonth);
    cy.log("future day ", futureDay);

    const selectMonthAndYear = () => {
      cy.get(".datepicker-dropdown")
        .find(".datepicker-switch")
        .first()
        .then((currentDate) => {
          if (!currentDate.text().includes(futureYear)) {
            cy.get(".next").first().click();
            selectMonthAndYear();
          } else if (!currentDate.text().includes(futureMonth)) {
            cy.get(".next").first().click();
            selectMonthAndYear();
          }
        });
    };

    selectMonthAndYear();
    cy.get(".datepicker-days .day").contains(futureDay).click();
    cy.get("#datepicker input").should(
      "have.value",
      `${(date.getMonth() + 1).toString().padStart(2, "0")}-${futureDay
        .toString()
        .padStart(2, "0")}-${futureYear}`
    );
  });
});
