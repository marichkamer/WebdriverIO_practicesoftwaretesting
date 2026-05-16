import BasePage from './basePage.js';

class HomePage extends BasePage {
 get searchInput() { 
  return $('[data-test="search-query"]'); 
}
 get basketIcon() { 
  return $('[data-test="nav-cart"]'); 
}
 get basketCount() {
  return $('[data-test="cart-quantity"]');
}
  get languageButton() {
    return $('[data-test="language-select"]');
  }
  get cartLabel() {
    return $('[data-test="cart-label"]');
  }
  get addToCartBtn() {
  return $('[data-test="add-to-cart"]');
}

async addToBasket(name) {
  await this.openProduct(name);
  await this.addToCartBtn.waitForClickable();
  await this.addToCartBtn.click();
}

 async openProduct(name) {
  const productCard = await $(`.card-title=${name}`).parentElement();
  await productCard.waitForClickable();
  await productCard.click();
}

 async openBasket() {
    await this.basketIcon.click();
  }

  async getBasketCount() {
    await this.basketCount.waitForDisplayed();
    return await this.basketCount.getText();
  }

  async switchLanguage(langCode) {
    await this.languageButton.click();
     await $(`[data-test="lang-${langCode}"]`).click();
  }

  async getCartLabelText() {
    return await this.cartLabel.getText();
  }

  async open() {
  await super.open('/');
}

  
}

export default new HomePage();
