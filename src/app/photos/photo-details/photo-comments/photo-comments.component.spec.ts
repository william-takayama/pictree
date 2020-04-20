import { async, TestBed } from '@angular/core/testing';
import { PhotoCommentsComponent } from './photo-comments.component';
import { PhotoService } from '../../photo/photo.service';
import { RouterTestingModule } from '@angular/router/testing';
import { VMessageModule } from 'src/app/shared/components/vmessage/vmessage.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

describe('Photo Comments Components', () => {

    let component: PhotoCommentsComponent;
    let photoService: PhotoService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PhotoCommentsComponent],
            providers: [
                PhotoService,
            ],
            imports: [
                HttpClientTestingModule,
                RouterTestingModule,
                VMessageModule,
                ReactiveFormsModule
            ]
        })
    }));

    beforeEach(() => {
        photoService = TestBed.get(PhotoService);

        spyOn(photoService, "getComments").and.returnValue(of([{
            date: new Date(),
            text: 'get comment',
            userName: 'will',
        }]))

        const fixture = TestBed.createComponent(PhotoCommentsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Should be created', () => {
        expect(component).toBeTruthy();
    });

    it('Should save the comment', () => {

        const spyAlert = spyOn(window, "alert").and.returnValue(alert('Comment has been added and saved'));

        component.commentForm.get('comment').setValue('comment testing');
        component.save();

        expect(spyAlert).toHaveBeenCalledWith('Comment has been added and saved');
    });
});