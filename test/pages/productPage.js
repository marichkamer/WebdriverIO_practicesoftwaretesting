class ProductPage {

get title() { 
  return $('[data-test="product-name"]'); 
  }
get price() {
  return $('[data-test="unit-price"]');
  } 
get description() { 
  return $('[data-test="product-description"]'); 
  }
get addToCart() { 
  return $('[data-test="add-to-cart"]'); 
  }
get addToFav() { 
  return $('[data-test="add-to-favorites"]'); 
}

 async getTitle() {
   return await this.title.getText();
 }

 async isPriceVisible() {
   return await this.price.isDisplayed();
 }

 async isDescriptionVisible() {
   return await this.description.isDisplayed();
 }
}

export default new ProductPage();
