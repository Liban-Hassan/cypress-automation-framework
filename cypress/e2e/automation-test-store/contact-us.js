/// <reference types='cypress' />
before(() => {
    cy.fixture('userDetails').as('user')
    cy.visit('https://automationteststore.com/')
});
describe('Test Contact Us form via Automation Test Store', ()=> {
    it('Should be able to submit a successful submission via contact us form', ()=> {
        cy.visit('https://automationteststore.com/')
        cy.get("a[href$='contact']").click().then(function (linkText) {
            cy.log('This is the Contact link header:' + linkText.text())
        })
        // cy.get('.info_links_footer > :nth-child(5) > a').click()// this path is prone to breakage
        // cy.xpath("//a[contains(@href, 'contact')]").click()
        cy.get('@user').then((user) => {
            cy.get('#ContactUsFrm_first_name').type(user.first_name)
            cy.get('#ContactUsFrm_email').type(user.email)
        })
        cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email')
        cy.get('#ContactUsFrm_enquiry').type('Can i get a discount on bulk thank you')
        cy.get("button[title='Submit']").click()
        // cy.get('.col-md-6 > .btn').click()
        
        cy.get('.mb40 > :nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!')
        
    })

    // it('Should not be able to submit a successful submission via contact us form', ()=> {
    //     cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
    //     cy.get('[name="first_name"]').type('Liban')
    //     cy.get('[name="last_name"]').type('Hassan')
        
    //     cy.get('textarea.feedback-input').type('blskjfgksd')
    //     cy.get('[type="submit"]').click()
    // })
})
