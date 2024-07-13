/// <reference types="cypress"/>

describe('Test File Upload via webdriveruni', () => {
    it('Upload a file....', () => {
        cy.visit('/')
        cy.get('#file-upload').invoke('removeAttr', 'target').click({force: true})
        cy.get('#myFile').selectFile('cypress/fixtures/laptop.png')
        cy.get('#submit-button').click()

    });

    it('Upload no file....', () => {
        cy.visit('/')
        cy.get('#file-upload').invoke('removeAttr', 'target').click({force: true})
        cy.get('#submit-button').click()
    });
});

