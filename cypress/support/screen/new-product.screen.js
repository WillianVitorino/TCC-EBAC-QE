class NewProductScreen{
    get #fieldProductTitle(){
        return $('android=new UiSelector().text("Enter Product Title")')
    }

    get #buttonDescribeProduct(){
        return $('android=new UiSelector().text("Describe your product")')
    }

    get #fieldDescription(){
        return $('id:visualEditor')
    }

    get #buttonReturn(){
        return $('~Navigate up');
    }

    get #buttonAddPrice() {
        return $('android=new UiSelector().text("Add price")');
    }

    get #fieldRegularPrice() {
        return $('//android.widget.LinearLayout[1]/android.widget.FrameLayout/android.widget.EditText');
    }

    get #fieldSalePrice() {
        return $('//android.widget.LinearLayout[2]/android.widget.FrameLayout/android.widget.EditText');
    }

    get #buttonPublish() {
        return $('id:menu_done');
    }

    async fillFieldProductTitle(text){
        await this.#fieldProductTitle.setValue(text);
    }

    async addDescriptionProduct(text){
        await this.#buttonDescribeProduct.click();
        await this.#fieldDescription.setValue(text);
        await this.#buttonReturn.click();
    }
    
    async addPrice(regularPrice, salePrice) {
        await this.#buttonAddPrice.click();
        await this.#fieldRegularPrice.click();
        await this.#fieldRegularPrice.clearValue();
        await this.#fieldRegularPrice.setValue(regularPrice);
        await this.#fieldSalePrice.click();
        await this.#fieldRegularPrice.clearValue();
        await this.#fieldSalePrice.setValue(salePrice);
        await this.#buttonReturn.click();
    }

    async publish(){
        await this.#buttonPublish.click();
        await this.#buttonReturn.click();
    }

}

module.exports = new NewProductScreen;