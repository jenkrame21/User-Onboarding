// Write test code here

describe('Form App', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    const typeNameInput = () => cy.get('input[name="fName"]')
    const typeEmailInput = () => cy.get('input[email="email"]')
    const typePasswordInput = () => cy.get('input[password="password"]')

    it('Type name in input', () => {
        typeNameInput()
            .should('have.value', '')
            .type('Jennifer')
            .should('have.value', 'Jennifer')
        typeEmailInput()
            .should('have.value', '')
            .type('jk@jk.com')
            .should('have.value', 'jk@jk.com')
        typePasswordInput()
            .should('have.value', '')
            .type('password1234')
            .should('have.value', 'password1234')
    })

})