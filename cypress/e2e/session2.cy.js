/// <reference types = "cypress"/>
describe('session2', () => {
    it('1- Basic Syntax', () => {
        cy.visit("https://www.play2.automationcamp.ir/index.html")
        cy.get('#fname').type("Mohammad")

    })
    it('2- Auto Scroll', () => {
        cy. visit("https://datatables.net/examples/basic_init/scroll_x.html")
        cy.get(':nth-child(9) > :nth-child(9)').click()
    })
    it('3- Contains', () => {
         cy.visit("https://www.play2.automationcamp.ir/index.html")
         cy.contains('This is your form title:')
         cy.contains("label[for='moption']", " Option 2")
         cy.get("label[for='moption']").contains(" Option 2")

          })
})

