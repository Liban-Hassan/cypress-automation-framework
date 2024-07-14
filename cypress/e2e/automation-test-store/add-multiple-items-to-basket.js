import AutoStore_Homepage_PO from "../../support/pageObjects/automation-test-store/Autostore_Homepage_PO";
import HairCare_PO from "../../support/pageObjects/automation-test-store/HairCare_PO";
///<reference types= 'cypress'/>
describe('Add multiple items to the basket', () => {
    const homePage = new AutoStore_Homepage_PO()
    const hairCarePage = new HairCare_PO()

    before(function() {
        cy.fixture('products').then(function (data) {
            globalThis.data = data
        })
    });
    beforeEach(function() {
        homePage.visitHomepage()
        homePage.clickOn_Hair_Care_Link()
    });

    it('Add specific items to basket', () => {
      hairCarePage.addHairCareProductsToBasket()
    });
});