import { assert } from 'chai';
import LoginPage from '../pages/LoginPage.js';
import { auth } from '../data/auth.data.js';

describe('Login', () => {
  beforeEach(async () => {
    await LoginPage.open();
    await LoginPage.goToLogin();});

  it('User logs in successfully', async () => {
    await LoginPage.login(
      auth.username,
      auth.password
    );
    const title = await $('h1').getText();
    assert.equal(title, 'My account');
  });
});
