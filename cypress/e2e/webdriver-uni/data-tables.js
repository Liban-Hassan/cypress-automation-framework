/// <reference types="cypress" />
describe("Handling data via webdriveruni", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
  });
  it("Calculate & assert all total age of all users", () => {
    const userDetails = [];
    let num = 0;
    cy.get("#thumbnail-1 td")
      .each(($el, index, $list) => {
        cy.log((userDetails[index] = $el.text()));
      })
      .then(() => {
        for (let i = 0; i < userDetails.length; i++) {
          if (Number(userDetails[i])) {
            num += Number(userDetails[i]);
          }
        }
        cy.log(`Found total age: ${num}`);
        expect(num).to.eq(322)

      });
  });
  // other method 
//   it("Calculate & assert all total age of all users", () => {
//     let totalAge = 0;
//     cy.get("#thumbnail-1 td")
//       .each(($el) => {
//         const age = Number($el.text());
//         if (age) { // This will be true only if 'age' is a valid number and not 0
//           totalAge += age;
//         }
//       })
//       .then(() => {
//         cy.log(`Found total age: ${totalAge}`);
//         expect(totalAge).to.eq(322);
//       });
//   });

    it('Calculate & assert the age of a user based on last name', () => {
        cy.get('#thumbnail-1 tr td:nth-child(2)').each(($el, index) => {
            const text = $el.text()
            if(text.includes('Woods')){
                cy.get('#thumbnail-1 tr td:nth-child(2)').eq(index).next().then((age) => {
                    const userAge = age.text()
                    expect(userAge).to.eq('80')
                })
            }
        })
    });
});
