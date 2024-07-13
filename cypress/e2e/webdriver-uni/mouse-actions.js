/// <reference types='cypress' />

describe("Test mouse actions", () => {
    it("Scroll element into view", () => {
      cy.visit("/");
      cy.get("#actions").scrollIntoView().invoke("removeAttr", "target").click({ force: true });
      cy.get('#main-header').should('include.text', 'The Key to Success is to take massive ACTION!')

    });

    it("Drag & drop draggable item", () => {
        cy.visit("/");
        cy.get("#actions").scrollIntoView().invoke("removeAttr", "target").click({ force: true });
        cy.get('#main-header').should('include.text', 'The Key to Success is to take massive ACTION!')

        cy.get('#draggable').trigger('mousedown', {which: 1})
        cy.get('#droppable').trigger('mousemove').trigger('mouseup', {force: true})
        
      });
      
      it("Perform double mouse click", () => {
        cy.visit("/");
        cy.get("#actions").scrollIntoView().invoke("removeAttr", "target").click({ force: true });
        cy.get('#double-click').dblclick()        
      });

      it.only("Perform click & hold on element", () => {
        cy.visit("/");
        cy.get("#actions").scrollIntoView().invoke("removeAttr", "target").click({ force: true });

        cy.get('#click-box').trigger('mousedown', {which: 1}).then(($el) => {
            expect($el).to.have.css('background-color','rgb(0, 255, 0)')
        })      
      });
})