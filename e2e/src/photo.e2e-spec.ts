import { PhotoFormPage } from './pageObject/photos/photo-form.po';
import { PhotoListPage } from './pageObject/photos/photo-list.po';

describe('Testing photos features', () => {
    let photoFormPage: PhotoFormPage;
    let photoListPage: PhotoListPage; 
    let comment: string = 'Great photo!';
    beforeEach(() => {
        photoFormPage = new PhotoFormPage();
        photoListPage = new PhotoListPage();
    });

    it('Should navigate to /p/add', () => {
        photoFormPage.navigateToPhotoForm();
    });

    it('Should upload image', () => {
        photoFormPage.uploadImage();
        photoFormPage.commentImage(comment);
        photoFormPage.getUploadButton().click();
    });

    it('Search image', () => {
        photoListPage.navigateToPhotoList();
        photoListPage.searchImage(comment);
        photoListPage.getImage();
    });
})