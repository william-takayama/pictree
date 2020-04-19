import { browser, element, by } from 'protractor';


export class PhotoListPage { 

    navigateToPhotoList() {
        return browser.get('/#/user/flavio');
    }

    searchImage(comment) {
        return element(by.className('rounded')).sendKeys(comment);
    }

    getImage() {
        return element.all(by.css('no-gutters .col-4')).get(0);
    }
}