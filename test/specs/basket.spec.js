import { expect } from 'chai';
import HomePage from '../pages/homePage.js';
import { product } from '../data/product.data.js';


describe('Basket', () => {
   beforeEach(async () => {
    await HomePage.open();
  });

 it('User adds product to basket', async () => {
    await HomePage.addToBasket(product.pliers);
    await HomePage.openBasket();
    const basketCount =
    await HomePage.getBasketCount();
    expect(basketCount).to.equal('1');
  });
});
