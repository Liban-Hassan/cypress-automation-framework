/// <reference types="cypress" />
describe("Test DatePicker via webdriveruni", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.get("#datepicker").invoke("removeAttr", "target").click({ force: true });
    });

    it("Select date from DatePicker", () => {
      cy.get("#datepicker").click()

      const date = new Date()
      date.setDate(date.getDate() + 82)
      
      const futureYear = date.getFullYear()
      const futureMonth = date.toLocaleString('default', {month: 'long'})
      const futureDay = date.getDate()

    //   cy.log('this is the year: '+futureYear)
    //   cy.log('this is the month: '+ futureMonth)
    //   cy.log('this is the day: '+ futureDay)
      
      function selectMonthAndYear(){
        cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then((currentDate) => {
            if(!currentDate.text().includes(futureYear)){
                cy.get('.next').first().click()
                selectMonthAndYear()
            }
        }).then(() => {
            cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then((currentDate) => {
                if(!currentDate.text().includes(futureMonth)){
                    cy.get('.next').first().click()
                    selectMonthAndYear()
                }
            })
        })

      }

      function selectFutureDay () {
        cy.get("[class='day']").contains(futureDay)
    }
      selectMonthAndYear()
      selectFutureDay()

    });
   
     
  });
  