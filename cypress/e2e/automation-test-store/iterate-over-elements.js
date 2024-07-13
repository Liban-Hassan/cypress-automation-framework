import AutoStore_Homepage_PO from "../../support/pageObjects/automation-test-store/Autostore_Homepage_PO";
///<reference types='cypress'/>

describe("Iterate over elements", () => {
  const homePage = new AutoStore_Homepage_PO()

  beforeEach(() => {
    homePage.visitHomepage()
    homePage.clickOn_Hair_Care_Link()
    // cy.visit("https://automationteststore.com/");
    // cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
  });
  it("Log all the Hair Care Info", () => {
    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
      cy.log(`Index: ${index}: ${$el.text()} `);
    });
  });

  it("Add specific to the basket", () => {
    cy.selectProduct("Curls to straight Shampoo")
    // cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
    //   if ($el.text().includes("Curls to straight Shampoo")) {
    //     cy.wrap($el).click();
    //   }
    // });
  });

  it("Add specific Item to basket", () => {
        cy.get("a[href*='product/category&path=']").contains("Fragrance").click();
        cy.selectProduct("Gucci Guilty")
        // cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
        //   cy.log(`Index: ${index}: of ${$el} `);
        //   if ($el.text().includes("Gucci Guilty")) {
        //     cy.wrap($el).click();
        //   }
        // });
      });

 
});

// describe("Iterate over Fragrance Items", () => {
//   it("log all the Fragrance info", () => {
//     cy.visit("https://automationteststore.com/");
//     cy.get("a[href*='product/category&path=']").contains("Fragrance").click();
//     cy.get("h1 .maintext").then(($headerText) => {
//       const headerText = $headerText.text();
//       cy.log(`This is the header of Fragrance page: ${headerText}`);
//     });
//     cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
//       cy.log(`Index: ${index}: of ${$el} `);
//     });
//   });

//   it("Add specific Item to basket", () => {
//     cy.visit("https://automationteststore.com/");
//     cy.get("a[href*='product/category&path=']").contains("Fragrance").click();
//     cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
//       cy.log(`Index: ${index}: of ${$el} `);
//       if ($el.text().includes("Gucci Guilty")) {
//         cy.wrap($el).click();
//       }
//     });
//   });
// });
