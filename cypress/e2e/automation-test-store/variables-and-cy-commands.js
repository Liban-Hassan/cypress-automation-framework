///<reference types='cypress'/>

describe('Verifying variables, cy commands and jquery commands', ()=> {

    it('Navigate to specific product pages ', ()=> {
        cy.visit('https://automationteststore.com/')
    //The following will fail remember cypress all was handles the order of execution
    // const makeUpLink = cy.get("a[href*='product/category&path=']").contains('Makeup').click()
    // const skinCareLink = cy.get("a[href*='product/category&path=']").contains('Skincare').click()
    // makeUpLink.click()
    // skinCareLink.click()
    
    
    //The following approach will work but is not recommended 
    // const makeUpLink = cy.get("a[href*='product/category&path=']").contains('Makeup').click()
     // makeUpLink.click()
    // const skinCareLink = cy.get("a[href*='product/category&path=']").contains('Skincare').click()
    // skinCareLink.click()

    //recommended approach
    cy.get("a[href*='product/category&path=']").contains('Makeup').click()
    cy.get("a[href*='product/category&path=']").contains('Skincare').click()
        
    })

    

    it('Verify Link Header', ()=> {
        cy.visit('https://automationteststore.com/')
        cy.get("a[href*='product/category&path=']").contains('Makeup').click()

        cy.get('h1 .maintext').then(($headerLink) => {
            const headerLink = $headerLink.text()
            cy.log('This is the makeup headr link:' + headerLink)
        })
    })

    it.only('Validate Properties on Contact page', () => {
        cy.visit('https://automationteststore.com/index.php?rt=content/contact')

    //Use cypress commands and chaining 
    //Used cypress commands with chia assertion(should)
        cy.contains('#ContactUsFrm', 'Contact Us Form').find('#field_11').should('contain', 'First name')

    //Use JQuery Approach
    //Used cypress with JQuery methods and a good approach is to use Promises to handle order of executions
    cy.contains('#ContactUsFrm', 'Contact Us Form').then(text => {
        const firstNameText = text.find('#field_11').text()
        expect(firstNameText).to.contain('First name')

        //Use Embedded commands (Closures)
        cy.get('#field_11').then(fNText => {
            cy.log(fNText.text())
            cy.log(fNText)
        })
    })


    })

})    