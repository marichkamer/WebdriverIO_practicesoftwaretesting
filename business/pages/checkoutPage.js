class CheckoutPage {
  get proceedtoCheckoutStep1() {
    return $('[data-test="proceed-1"]');
  }

  get proceedtoCheckoutStep2() {
    return $('[data-test="proceed-2"]');
  }

  get proceedtoCheckoutStep3() {
    return $('[data-test="proceed-3"]');
  }

  get confirmBtn() {
    return $('[data-test="finish"]');
  }

  get paymentMethod() {
    return $('[data-test="payment-method"]');
  }

  get countryInput() {
    return $('[data-test="country"]');
  }

  get postalCodeInput() {
    return $('[data-test="postal_code"]');
  }

  get houseNumberInput() {
    return $('[data-test="house_number"]');
  }

  get successMsg() {
    return $('[data-test="payment-success-message"]');
  }

async completeCheckout(method, addressData) {
  await this.proceedtoCheckoutStep1.click();
  await this.proceedtoCheckoutStep2.click();

  await this.fillAddress(addressData);

  await this.proceedtoCheckoutStep3.click();

  await this.selectPaymentMethod(method);

  await this.confirmBtn.click();
}

async selectPaymentMethod(method) {
  await this.paymentMethod.waitForDisplayed();
  await this.paymentMethod.selectByAttribute('value', method);
}


 async isSuccessVisible() {
   return await this.successMsg.isDisplayed();
 }

 async fillAddress(data) {
  await this.countryInput.waitForDisplayed();
  await this.countryInput.selectByVisibleText(data.country);

  await this.postalCodeInput.waitForEnabled();
  await this.postalCodeInput.setValue(data.postalCode);

  await this.houseNumberInput.waitForEnabled();
  await this.houseNumberInput.setValue(data.houseNumber);
}
}

export default new CheckoutPage();
