import * as chai from 'chai';

import HomePage from '../pages/homePage.js';
import { language } from '../data/language.data.js';
chai.should();

describe('Language switch', () => {
  beforeEach(async () => {
    await HomePage.open();
  });

  it('User changes site language successfully', async () => {
    await HomePage.switchLanguage(language.de.code);
    const bodyText = await $('body').getText();
    bodyText.should.include(language.de.wordCheck);
  });
});