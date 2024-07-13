///<reference types='cypress'/>

describe("Iterate over elements", () => {

    it("Log all the Hair Care Info", () => {
      cy.visit("https://automationteststore.com/");
      cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
      //get(this is all the elements), .eq() gets the position of index, .invoke() extracts the text, as()creates a variable to store value/text
      cy.get(".fixed_wrapper .prdocutname").eq(1).invoke('text').as('productThumbnail')
      cy.get("@productThumbnail").its('length').should('be.gt', 5)
      cy.get("@productThumbnail").should('include', 'Eau Parfumee au The Vert Shampoo')
    });

    it("Validate number of products on Homepage and shoppingcart via title", () => {
        cy.visit("https://automationteststore.com/");
        cy.get(".thumbnail").as('productThumbnail')
        cy.get('@productThumbnail').should('have.length', 16)
        cy.get('@productThumbnail').find('.productcart').invoke('attr', 'title').should('include', 'Add to Cart')
    })

    it.only("Calculate total of normal and sales products", () => {
        cy.visit("https://automationteststore.com/");
        cy.get(".thumbnail").as('productThumbnail')
        // cy.get('@productThumbnail').find('.oneprice').each(($el, index, $list) => {
        //     cy.log($el.text()) .pricenew
        // })
        cy.get(".thumbnail").find('.oneprice').invoke('text').as('itemPrice')
        cy.get('.thumbnail').find('.pricenew').invoke('text').as('salesPrice')

        let comPriceTotal = 0
        cy.get('@itemPrice').then(($linktext) => {
            let nonSaleTotal = 0
            let itemPrice = $linktext.split('$')
            itemPrice.forEach(el => {
                nonSaleTotal += Number(el)
            });
            comPriceTotal += nonSaleTotal
            cy.log(`Non Sale total: ${nonSaleTotal}`)
        })

        cy.get('@salesPrice').then(($linktext) => {
            let salesTotal = 0
            let salesPrice = $linktext.split('$')
            salesPrice.forEach(el => {
                salesTotal += Number(el)
            })
            comPriceTotal += salesTotal
            cy.log(`Sales total: ${salesTotal}`)
        })

        .then(() => {
            cy.log(`The total price of all Products is: ${comPriceTotal}`)
            expect(comPriceTotal).to.equal(648.50)
        })
       
    })

})

