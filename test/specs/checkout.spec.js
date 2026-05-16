import LoginPage from '../pages/LoginPage.js';
import HomePage from '../pages/HomePage.js';
import CheckoutPage from '../pages/CheckoutPage.js';
import { product } from '../data/product.data.js';
import { addressData } from '../data/address.data.js';
import { paymentMethod } from '../data/paymentMethod.data.js';
import { auth } from '../data/auth.data.js';

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
