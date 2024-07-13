/// <reference types='cypress' />

describe("Interact with dropdown list via webdriveruni ", () => {
    it("Select specific values via seleect dropdown list", () => {
      cy.visit("/");
      cy.get("#dropdown-checkboxes-radiobuttons").invoke("removeAttr", "target").click({ force: true });
      //This action and assertion has worked because 'python' was extracted from value='python'
      cy.get('#dropdowm-menu-1').select('python').should('have.value', 'python')
      //This action and assertion has worked because 'TestNG' was extracted from the text 'TestNG'
      cy.get('#dropdowm-menu-2').select('TestNG').contains('TestNG') 
      cy.get('#dropdowm-menu-3').select('javascript').should('have.value', 'javascript')
    });

    it("Select specific values via seleect dropdown list test challenge", () => {
        cy.visit("/");
        cy.get("#dropdown-checkboxes-radiobuttons").invoke("removeAttr", "target").click({ force: true });
  
        cy.get('#dropdowm-menu-2').select('maven').should('have.value', 'maven')
        cy.get('#dropdowm-menu-2').select('TestNG').contains('TestNG')
         
      });

})