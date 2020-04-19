import { SigninPage } from './pageObject/home/signin.po';
import { SignupPage } from './pageObject/home/signup.po';

describe('Testing home page', () => {
    let signinPage: SigninPage;
    let signupPage: SignupPage;

    let userInfo = [
        { name: 'email', value: 'will@gmail.com' },
        { name: 'fullName', value: 'Will Takayama' },
        { name: 'userName', value: 'willtak' },
        { name: 'password', value: '12345678' }
    ]

    beforeEach(() => {
        signinPage = new SigninPage();
        signupPage = new SignupPage();
    });
    // SIGN UP
    it('Should go to signup', () => {
        signupPage.navigateToSignup();
    });

    it('Should register a user', () => {
        userInfo.forEach(user => {
            signupPage.registerUser(user.name, user.value);
        });
        expect(signupPage.getRegisterButton().click());
    });

    // LOGIN
    it('Should go to home', () => {
        signinPage.navigateToHome();
    });

    it('Should verify url', () => {
        expect(signinPage.verifyUrl()).toBe('http://localhost:4200/#/home');
    });

    it('Should validate login', () => {
        expect(signinPage.getInput('userName', 'flavio'));
        expect(signinPage.getInput('password', '123'));
        expect(signinPage.getLoginButton().click());
    });
});