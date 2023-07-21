/// <reference types = "cypress"/>

describe('Suite1', function (){
    it('1-Google Search', function (){
        cy.visit("https://google.com/")
        cy.get("textarea[name=q]").type("Cypress{Enter}")
    })

    it('2-Cypress Website',  () =>{
        cy.visit("https://cypress.io")
        cy.title().should('eq', "JavaScript Component Testing and E2E Testing Framework | Cypress")
        cy.title().should('include', "E2E Testing Framework")
    })
    it("4- Relatives", () => {
        cy.visit("https://play2.automationcamp.ir/index.html")
        cy.get("#owc").children()
        cy.get("#owc").children("[value='option 2']").click()
        cy.contains("Singer").parent()
        cy.get("#owc").children("[value='option 2']").siblings().should('have.length', 2)
    })
    it.only('1-Gmail Sign in', function (){
        cy.visit("https://accounts.google.com/signin")
        cy.get('#identifierId').type("sm.madadpour@gmail.com")
        cy.get('#identifierNext > .VfPpkd-dgl2Hf-ppHlrf-sM5MNb > .VfPpkd-LgbsSe > .VfPpkd-vQzf8d').click()
        cy.get('.o6cuMc')
    })
})