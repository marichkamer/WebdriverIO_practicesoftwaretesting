import LoginPage from '../../business/pages/loginPage.js';
import HomePage from '../../business/pages/homePage.js';
import CheckoutPage from '../../business/pages/checkoutPage.js';
import { product } from '../../business/data/product.data.js';
import { addressData } from '../../business/data/address.data.js';
import { paymentMethod } from '../../business/data/paymentMethod.data.js';
import { auth } from '../../business/data/auth.data.js';

describe('Checkout', () => {
  beforeEach(async () => {
  await LoginPage.open();
   await LoginPage.goToLogin();
   await LoginPage.login(auth.username, auth.password);
   await $('h1').waitForDisplayed();
  });
  

 it('User completes purchase', async () => {
    await HomePage.open();
    await HomePage.addToBasket(product.hammer);
    await HomePage.openBasket();
    await CheckoutPage.completeCheckout(paymentMethod.cash, addressData);
    expect(CheckoutPage.successMsg).toBeDisplayed();
  });
});
