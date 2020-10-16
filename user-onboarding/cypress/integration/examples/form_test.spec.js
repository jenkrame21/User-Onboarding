// Write test code here

describe('Form App', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    const typeNameInput = () => cy.get('input[name="fName"]')
    const typeEmailInput = () => cy.get('input[email="email"]')
    const typePasswordInput = () => cy.get('input[password="password"]')
    const toggleTOSBox = () => cy.get('input[type="checkbox"]')
    const submitBtn = () => cy.get('button')

    it('User can type name/email/password in input', () => {
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
    it('User can check Terms of Service checkbox', () => {
        toggleTOSBox()
            .click()
    })
    it('User can submit the form data', () => {
        typeNameInput().type('Jennifer')
        typeEmailInput().type('jk@jk.com')
        typePasswordInput().type('password1234')
        toggleTOSBox().click()
        submitBtn().click()
    })
    it('Checking form validation', () => {
        typeNameInput().should('have.string', '')
        typeEmailInput().should('have.string', '')
        typePasswordInput().should('have.string', '')
        toggleTOSBox().click()
        submitBtn().click()
    })

})