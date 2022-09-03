class AutoStore_PO {
  visitHomepage() {
    cy.visit("https://automationteststore.com/");
  }

  clickHairCareLink() {
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
  }
}

export default AutoStore_PO;
