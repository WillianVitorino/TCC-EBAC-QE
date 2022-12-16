class HomeScreen {

    get buttonLoginStore() {
        return $('id:button_login_store');
    }

    get buttonContinueWordPress() {
        return $('id:button_login_wpcom');
    }

    async goToLoginStore() {
        await this.buttonLoginStore.click();
    }

    async goToLoginWordPress() {
        await this.buttonContinueWordPress().click();
    }
}

module.exports = new HomeScreen();
