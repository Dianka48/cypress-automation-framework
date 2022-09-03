/// <reference types="Cypress" />

describe("Test mouse actions", () => {
  it("Scroll element into view", () => {
    cy.visit("https://webdriveruniversity.com/");
    cy.get("#actions").scrollIntoView().invoke("removeAttr", "target").click();
  });

  it("I should be able to drag and drop a draggable item", () => {
    cy.visit("https://webdriveruniversity.com/");
    cy.get("#actions").scrollIntoView().invoke("removeAttr", "target").click();

    cy.get("#draggable").trigger("mousedown", { which: 1 });
    cy.get("#droppable")
      .trigger("mousemove")
      .trigger("mouseup", { force: true });
    cy.get("#droppable p").should(
      "have.css",
      "background-color",
      "rgb(244, 89, 80)"
    );
  });

  it("I should be able to perform a double mouse click", () => {
    cy.visit("https://webdriveruniversity.com/");
    cy.get("#actions").scrollIntoView().invoke("removeAttr", "target").click();

    cy.get("#double-click").dblclick();
    cy.get("#double-click").should(
      "have.css",
      "background-color",
      "rgb(147, 203, 90)"
    );
  });

  it("I should be able to hold down the left mouse click button on a given element", () => {
    cy.visit("https://webdriveruniversity.com/");
    cy.get("#actions").scrollIntoView().invoke("removeAttr", "target").click();

    cy.get("#click-box")
      .trigger("mousedown", { which: 1 })
      .should("have.css", "background-color", "rgb(0, 255, 0)");

    // cy.get("#click-box")
    //   .trigger("mousedown", { which: 1 })
    //   .then((element) => {
    //     expect(element).to.have.css("background-color", "rgb(0, 255, 0)");
    //   });
  });
});
