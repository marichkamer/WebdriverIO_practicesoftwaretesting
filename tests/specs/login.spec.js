import { assert } from 'chai';
import LoginPage from '../../business/pages/loginPage.js';
import { auth } from '../../business/data/auth.data.js';

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
