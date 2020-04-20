import { async, TestBed } from '@angular/core/testing';
import { PhotoComponent } from './photo.component';

describe('Photo Component', () => {

    let component: PhotoComponent;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PhotoComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        const fixture = TestBed.createComponent(PhotoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Should be created', () => {
        expect(component).toBeTruthy();
    });
});