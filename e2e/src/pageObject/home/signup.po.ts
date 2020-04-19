import { browser, element, by } from 'protractor';

export class SignupPage { 

    navigateToSignup() {
        return browser.get('/#/home/signup');
    }

    registerUser(formControlName, value) {
        return element(by.formControlName(formControlName)).sendKeys(value);
    }

    getRegisterButton() {
        return element(by.buttonText('Register'));
    }
}