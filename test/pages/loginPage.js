import BasePage from './basePage.js';

class LoginPage extends BasePage {
 get email() { return $('#email'); }
 get password() { return $('#password'); }
 get submit() { return $('[data-test="login-submit"]'); }
 get signInLink() {
    return $('[data-test="nav-sign-in"]');
  }

 async login(email, password) {
   await this.email.setValue(email);
   await this.password.setValue(password);
   await this.submit.click();
 }

 async goToLogin() {
    await this.signInLink.waitForClickable();
    await this.signInLink.click();
  }
}

export default new LoginPage();
