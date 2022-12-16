const homeScreen = require("../../support/screen/home.screen");
const loginScreen = require("../../support/screen/login.screen");
const storeScreen = require("../../support/screen/store.screen");
const newProductScreen = require("../../support/screen/new-product.screen");
const productsScreen = require("../../support/screen/products.screen");
const urlLoja = 'http://lojaebac.ebaconline.art.br'
const userLogin = 'gerente'
const password = 'GD*peToHNJ1#c$sgk08EaYJQ'

describe('Cadastrar produto', () => {
    it('Deve realizar cadastro de produto com sucesso', async() => {
        
        await homeScreen.goToLoginStore();
        await loginScreen.fillFieldSiteAdress(urlLoja);
        await loginScreen.continueWithStore();
        await loginScreen.addLogin(userLogin, password);
        await loginScreen.goToYourPasssword(password);
        await storeScreen.goToProducts();
        await productsScreen.goToAddProdutc();
        await productsScreen.goToSimplePhysycal();
        await newProductScreen.fillFieldProductTitle('Produto Ebac');
        await newProductScreen.addDescriptionProduct('Cadastro de produto para validar fluxo de testes EBAC');
        await newProductScreen.addPrice('9000', '900');
        await newProductScreen.publish();
        await productsScreen.validateRegisterProduct();

    });
});