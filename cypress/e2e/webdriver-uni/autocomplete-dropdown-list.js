/// <reference types='cypress' />

describe("Verify autocomplete dropdown list via webdriveruni ", () => {

    it("Select specific product via autocomplete dropdown list", () => {
      cy.visit("/");
      cy.get("#autocomplete-textfield").invoke("removeAttr", "target").click({ force: true });
      cy.get('h2').should('have.text', 'Autocomplete TextField')


      cy.get('#myInput').type('A')

      cy.get('#myInputautocomplete-list > *').each(($el) => {
        const ingredient = $el.text()
        const reqIngredient = 'Artichoke'
        if(ingredient === reqIngredient){
            $el.trigger('click')
            cy.get('#submit-button').click()
            cy.url().should('include', reqIngredient)

        }
      }).then(() => {
        cy.get('#myInput').type('G')
        cy.get('#myInputautocomplete-list > *').each(($element) => {
            const secIngred = $element.text()
            const secReqIngred = 'Grapes'
            if(secIngred === secReqIngred){
                $element.trigger('click')
                cy.get('#submit-button').click()
                cy.url().should('include', secIngred)
            }
        })
      })
    });

    

})