class LoginScreen{

    get #fieldSiteAdress(){
        return $('id:input');
    }

    get #buttonContinue(){
        return $('id:bottom_button');
    }

    get #buttonContinueStore(){
        return $('id:login_site_creds');
    }

    get #fieldUsername(){
        return $('android=new UiSelector().text("Username")');
    }

    get #fieldPassword(){
        return $('android=new UiSelector().text("Password")');
    }

    get #buttonYourPassword(){
        return $('id:login_enter_password');
    }

    async fillFieldSiteAdress(text){
        await this.#fieldSiteAdress.setValue(text);
        await this.#buttonContinue.click();
    }

    async addLogin(username,password){
        await this.#fieldUsername.setValue(username);
        await this.#fieldPassword.setValue(password);
        await this.#buttonContinue.click();
    }

    async goToYourPasssword(password){
        await this.#buttonYourPassword.click();
        await this.#fieldPassword.setValue(password);
        await this.#buttonContinue.click();
    }

    async continue(){
        await this.#buttonContinue.click();
    }

    async continueWithStore(){
        await this.#buttonContinueStore.click();
    }

}
module.exports = new LoginScreen();