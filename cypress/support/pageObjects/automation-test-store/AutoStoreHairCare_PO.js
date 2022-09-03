class AutoStoreHairCare_PO {
  addHairCareProductsToBasket() {
    globalThis.data.productName.forEach((name) => {
      cy.addProductToBasket(name).then(() => {
        // debugger;
      });
    });

    cy.get(".dropdown.hover .fa-shopping-cart")
      .first()
      .next()
      .invoke("text")
      .should("equal", "3");
    // .debug();
  }
}

export default AutoStoreHairCare_PO;
