import Homepage_PO from "../../support/pageObjects/webdriver-uni/Homepage_PO";
import Contact_Us_PO from "../../support/pageObjects/webdriver-uni/Contact_Us_PO";
/// <reference types='cypress' />

describe('Test Contact Us form via Webdriveruniversity', ()=> {
    const homePage = new Homepage_PO();
    const contactUsPage = new Contact_Us_PO()
    before(() => {
        cy.fixture('example').then(function (data) {
            globalThis.data = data
        })
    });
    beforeEach(() => {
        homePage.visitHomepage()
        homePage.clickOn_ContactUs_Button()
        // cy.visit(Cypress.env('webdriveruni_homepage') + '/Contact-Us/contactus.html')
    });

    it('Should be able to submit a successful submission via contact us form', ()=> {
        contactUsPage.contactForm_Submission(data.first_name, data.last_name, data.email, data.body, 'h1', 'Thank You for your Message!')
        // cy.webdriverUni_ContactForm_Submission(data.first_name, data.last_name, data.email, data.body, 'h1', 'Thank You for your Message!')
        // cy.get('[name="first_name"]').type(data.first_name)
        // cy.get('[name="last_name"]').type(data.last_name)
        // cy.get('[name="email"]').type(data.email)
        // cy.get('textarea.feedback-input').type(data.body)
        // cy.get('[type="submit"]').click()
        // cy.get('h1').should('have.text', 'Thank You for your Message!')
    })

    it('Should not be able to submit a successful submission via contact us form', ()=> {
        contactUsPage.contactForm_Submission(data.first_name, data.last_name, ' ', 'How can I Liban Hassan learn Cypress', 'body', 'Error: Invalid email address')
        // cy.webdriverUni_ContactForm_Submission(data.first_name, data.last_name, ' ', 'How can I Liban Hassan learn Cypress', 'body', 'Error: Invalid email address')
        // cy.get('[name="first_name"]').type(data.first_name)
        // cy.get('[name="last_name"]').type(data.last_name)
        // cy.get('textarea.feedback-input').type(data.body)
        // cy.get('[type="submit"]').click()
        // cy.get('body').contains('Error: all fields are required')
    })
})

