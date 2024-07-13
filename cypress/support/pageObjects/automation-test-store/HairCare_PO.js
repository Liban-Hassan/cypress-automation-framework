class HairCare_PO {

    addHairCareProductsToBasket() {
        data.productName.forEach(function(element) {
            cy.addProductToBasket(element)  
        })
        cy.get('.dropdown-toggle > .fa').click()
    }
}

export default HairCare_PO