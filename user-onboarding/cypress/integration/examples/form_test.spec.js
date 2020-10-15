// Write test code here

describe('Form App', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    const typeNameInput = () => cy.get('input[name="fName"]')
    const typeEmailInput = () => cy.get('input[email="email"]')

    it('Type name in input', () => {
        typeNameInput()
            .should('have.value', '')
            .type('Jennifer')
            .should('have.value', 'Jennifer')
        typeEmailInput()
            .should('have.value', '')
            .type('jk@jk.com')
            .should('have.value', 'jk@jk.com')
    })

})