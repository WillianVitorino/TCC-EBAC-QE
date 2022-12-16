/// <reference types= "cypress"/>

class LoginPage{
    get fieldUsername() {return cy.get('#username')}
    get fieldPassword() {return cy.get('#password')}
    get buttonLogin() {return cy.get('[name=login]')}

    goToLogin() {
        cy.visit('my-account/')
    }
    submitFormLogin = (username, password) => {
        this.fieldUsername.type(username)
        this.fieldPassword.type(password)
        this.buttonLogin.click()
    }
}

module.exports = new LoginPage();