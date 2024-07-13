/// <reference types='cypress' />

describe("Handle js Alerts", () => {
  it("Confirm JS Alerts contains correct message", () => {
    cy.visit("/");
    cy.get("#popup-alerts")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.get("h1").should("have.text", "Annoying Popup & Alerts!");

    cy.get("#button1").click();

    cy.on("window:alert", (str) => {
      expect(str).to.equal("I am an alert box!");
    });
  });

  it("Confirm js alert works after clicking OK button", () => {
    cy.visit("/");
    cy.get("#popup-alerts")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.get("#button4").click();
    cy.on('window:confirm', () => {
      return true;
    });
    cy.get("#confirm-alert-text").contains("You pressed OK!");
  });

  it("Confirm js alert works after clicking Cancel button", () => {
    cy.visit("/");
    cy.get("#popup-alerts")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.get("#button4").click();
    cy.on('window:confirm', () => {
      return false;
    });
    cy.get("#confirm-alert-text").contains("You pressed Cancel!");
  });

  it("Confirm js alert works using a Stub", () => {
    cy.visit("/");
    cy.get("#popup-alerts")
      .invoke("removeAttr", "target")
      .click({ force: true });

      const stub = cy.stub()
      cy.on('window:confirm', stub)

    cy.get("#button4").click().then(() => {
        expect(stub.getCall(0)).to.be.calledWith('Press a button!')
    }).then(() => {
        return true
    }).then(() => {
        cy.get("#confirm-alert-text").contains("You pressed OK!");
    })
    
  });
});
