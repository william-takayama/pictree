import { browser, element, by } from 'protractor';

export class SigninPage { 

    navigateToHome() {
        return browser.get('');
    }

    verifyUrl() {
        return browser.getCurrentUrl();
    }

    getInput(formControlName, value) {
        return element(by.css(`input[formControlName="${formControlName}"]`)).sendKeys(value);
    }

    getLoginButton() {
        return element(by.buttonText('login'));
    }
}