// /// <reference types="cypress"/>

// describe('Selector examples', () => {
//     it("Eamples of Selectors via webdriveruni contact page",() =>{
//         cy.visit('https://www.webdriveruni.com')

//         //by tag name
//         cy.get('input')

//         //
//     })
// })

// how to run cypress (test)
// ./node_modules/.bin/cypress open

//how to run headless browser meaning the window browser wont open
// ./node_modules/.bin cypress run


//how to run headed browser meaning see the test running on open window
// ./node_modules/.bin cypress run --headed


//how to run headed browser via chrome meaning see the test running on open chrome window
// ./node_modules/.bin cypress run --browser chrome

//how to trigger indivual test run
// ./node_modules/.bin cypress run --spec cypress/e2e/webdriver-uni/contact-us.js "copy relative path (change any back slash to forward slash)"

//how to trigger indivual folder with all the test runs
// ./node_modules/.bin cypress run --spec cypress/e2e/webdriver-uni/* "copy relative path (change any back slash to forward slash and wildcard '*')"

//how to find by index whilst chaining
//cy.get('.fixed_wrapper').find('.prdocutname').eq(1).click()

//promises has 3 stages pending, resolution and rejection and then returns either promises which are resolve or rejection

//promises and then enables us to handle the order of excution non-cypress commands
//-----------------------------------------------------------------------------------------------------------------
//npx cypress run --browser chrome --headed

//./node_modules/.bin/cypress run --spec cypress/e2e/webdriver-uni/checkboxes.js --record --key 8c8cea71-5789-4423-86ac-f07651062833

//./node_modules/.bin/cypress open
//------------------------------------------------------------------------------------------------------------------
//npx cypress run --browser chrome --headed

//npx cypress run --spec cypress/e2e/webdriver-uni/checkboxes.js --record --key 8c8cea71-5789-4423-86ac-f07651062833

//npx cypress open