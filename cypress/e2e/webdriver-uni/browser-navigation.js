/// <reference types='cypress' />

describe('Validate webdriveruni homepage links', ()=> {
    it.skip('Confirm links redirect to correct pages', ()=> {
        cy.visit('/')
        cy.get('#contact-us').invoke('removeAttr', 'target').click(({force: true}))
        cy.url().should('include', 'contactus')
        cy.go('back')
        cy.reload()
        cy.go('forward')
        cy.url().should('include', 'contactus')
        
    })

    it('Confirm ToDo link redirects to correct page', () => {
        cy.visit('/')
        cy.get('#to-do-list').invoke('removeAttr', 'target').click(({force: true}))
        cy.url().should('include', 'To-Do-List')
        cy.go('back')
        cy.reload()
        cy.go('forward')
        cy.url().should('include', 'To-Do-List')
        cy.go('back') 
    })

})