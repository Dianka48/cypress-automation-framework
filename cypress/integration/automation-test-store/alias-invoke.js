/// <reference types="Cypress" />

describe("Alias and invoke", () => {
  it("Valiate a specific hair care product", () => {
    cy.visit("https://automationteststore.com/");
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();

    cy.get(".fixed_wrapper .prdocutname")
      .eq(0)
      .invoke("text")
      .as("productThumbnail");

    cy.get("@productThumbnail").its("length").should("be.gt", 5);
    cy.get("@productThumbnail").should("include", "Seaweed Conditioner");
  });

  it("Valiate the number of the products on homepage and check the product cart text", () => {
    cy.visit("https://automationteststore.com/");

    cy.get(".thumbnail").as("products");

    cy.get("@products").its("length").should("eq", 16);
    cy.get("@products")
      .find(".productcart")
      .invoke("attr", "title")
      .should("include", "Add to Cart");
  });

  it("Calculate total of normal an sale proucts", () => {
    cy.visit("https://automationteststore.com/");

    cy.get(".thumbnail").as("products");
    // cy.get("@products")
    //   .find(".oneprice")
    //   .each((el, index, list) => {
    //     cy.log(el.text());
    //   });
    cy.get("@products").find(".oneprice").invoke("text").as("itemPrice");
    cy.get("@products").find(".pricenew").invoke("text").as("saleItemPrice");

    let itemsTotal = 0;

    cy.get("@itemPrice").then((linkText) => {
      const itemPrices = linkText.split("$");
      const total = itemPrices.reduce((acc, value) => {
        return acc + Number(value);
      }, 0);
      itemsTotal += total;
      cy.log("Non sale price items total " + total);
    });

    cy.get("@saleItemPrice")
      .then((linkText) => {
        const saleItemPrices = linkText.split("$");
        const saleTotal = saleItemPrices.reduce((acc, value) => {
          return acc + Number(value);
        }, 0);
        itemsTotal += saleTotal;
        cy.log("Sale price items total " + saleTotal);
      })
      .then(() => {
        cy.log("All products total price: " + itemsTotal);
        expect(itemsTotal).to.equal(662);
      });
  });
});
