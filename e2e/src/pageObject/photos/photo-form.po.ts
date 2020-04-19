import { browser, element, by } from 'protractor';

const path = require('path');
const image = '../../../../src/assets/img/home.jpg';

export class PhotoFormPage {
    
    navigateToPhotoForm() {
        return browser.get('/#/p/add')
    }

    uploadImage() {
        const dirImage = path.resolve(__dirname, image);
        element(by.css('input[type=file]')).sendKeys(dirImage);
    }

    commentImage(comment) {
        return element(by.formControlName('description')).sendKeys(comment);
    }

    getUploadButton() {
        return element(by.buttonText('Upload'));
    }
}