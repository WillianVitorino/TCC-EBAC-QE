const loginPage = require('../../support/pages/login.page')
const dadosLogin = require('../../fixtures/dados-login.json')

describe('Testes automatizados - Login', () => {
    beforeEach(() => {
        loginPage.goToLogin()
    })
    it('Validar login com sucesso', () => {
        loginPage.submitFormLogin(dadosLogin.user, dadosLogin.password)
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').contains(dadosLogin.user)
    });

    it('Validar campo obrigatório senha', () => {
        loginPage.submitFormLogin(dadosLogin.user, ' ')
        cy.get('.woocommerce-error').contains('o campo da senha está vazio')
    });
    
});