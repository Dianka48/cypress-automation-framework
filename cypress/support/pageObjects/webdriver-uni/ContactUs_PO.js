class ContactUs_PO {
  contactFormSubmission(
    firstName,
    lastName,
    email,
    text,
    selector,
    textToLocate
  ) {
    cy.get('[name="first_name"]').type(firstName);
    cy.get('[name="last_name"]').type(lastName);
    cy.get('[name="email"]').type(email);
    cy.get("textarea.feedback-input").type(text);
    cy.get('[type="submit"]').click();
    cy.get(selector, { timeout: 60000 }).should("contain", textToLocate);
    // cy.screenshot("Made a contact us from submission");
  }
}

export default ContactUs_PO;
