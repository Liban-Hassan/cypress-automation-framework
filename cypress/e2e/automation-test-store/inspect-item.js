/// <reference types='Cypress' />


describe('Inspect Automation Test Store Items using chain of commands', ()=> {

    it('Click on first item using item text', ()=> {
        cy.visit('https://automationteststore.com/')
        cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click()
    })

    it.only('Click on first item using item text', () => {
        cy.visit('https://automationteststore.com/')
        cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click().then(function (itemHeaderText) {
            console.log('this is the item header text: ' + itemHeaderText.text())
        })
    })

    it('Click on first item using index', ()=> {
        cy.visit('https://automationteststore.com/')
        cy.get('.fixed_wrapper').find('.prdocutname').eq(2).click()
    })

})    