import { PhotosModule } from './photos.module';

describe('Photos Module', () => {
    let photosModule: PhotosModule;

    beforeEach(() => {
        photosModule = new PhotosModule();
    });

    it('Should be created', () => {
        expect(photosModule).toBeTruthy();
    });
});