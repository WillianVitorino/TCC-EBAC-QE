class StoreScreen {

    get #textEbacShop() {
        return $('android=new UiSelector().text("EBAC - Shop")');
    }

    get #buttonProducts() {
        return $('~Products');
    }

    async goToProducts() {
        await this.#textEbacShop.isDisplayed();
        await this.#buttonProducts.waitForExist({ timeout: 11000})
        await this.#buttonProducts.click();
    }

}

module.exports = new StoreScreen;