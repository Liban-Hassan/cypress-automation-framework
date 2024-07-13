/// <reference types='cypress' />

describe("Verify Radio-Buttons via webdriveruni", () => {
    it("Check specific radio buttons", () => {
      cy.visit("/");
      cy.get("#dropdown-checkboxes-radiobuttons").invoke("removeAttr", "target").click({ force: true });

      cy.get('#radio-buttons').find("[type='radio']").eq(0).check()
       
    });

    it("Validate the states of specific radio buttons", () => {
        cy.visit("/");
        cy.get("#dropdown-checkboxes-radiobuttons").invoke("removeAttr", "target").click({ force: true });
  
        cy.get("input[value='lettuce']").should('not.be.checked')
        cy.get("input[value='cabbage']").should('not.be.checked')
        cy.get("input[value='pumpkin']").should('be.checked')
        
        cy.get("input[value='lettuce']").check().should('be.checked')
        cy.get("input[value='pumpkin']").should('not.be.checked')
        cy.get("input[value='cabbage']").should('be.disabled')
      });
})