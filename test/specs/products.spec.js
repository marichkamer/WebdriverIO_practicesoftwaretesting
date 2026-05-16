import { expect } from 'chai';
import HomePage from '../pages/HomePage.js';
import ProductPage from '../pages/ProductPage.js';
import { product } from '../data/product.data.js';

describe('Product Details', () => {
  beforeEach(async () => {
      await HomePage.open();
 });

 it('User views product details', async () => {
   await HomePage.openProduct(product.longPliers);
   const title = await ProductPage.getTitle();

   expect(title).to.equal(product.longPliers);
   expect(await ProductPage.isPriceVisible()).to.be.true;
   expect(await ProductPage.isDescriptionVisible()).to.be.true;
   expect(await ProductPage.addToCart.isDisplayed()).to.be.true;
   expect(await ProductPage.addToFav.isDisplayed()).to.be.true;
  });
 });

