import { async, TestBed } from '@angular/core/testing';
import { PhotoDetailsComponent } from './photo-details.component';
import { PhotoService } from '../photo/photo.service';
import { AlertService } from 'src/app/shared/components/alert/alert.service';
import { UserService } from 'src/app/core/user/user.service';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { PhotoModule } from '../photo/photo.module';
import { PhotoOwnerOnlyDirective } from './photo-owner-only/photo-owner-only.directive';
import { PhotoCommentsComponent } from './photo-comments/photo-comments.component';
import { ReactiveFormsModule } from '@angular/forms';
import { VMessageModule } from 'src/app/shared/components/vmessage/vmessage.module';
import { of } from 'rxjs';
import { Photo } from '../photo/photo';

describe('Photo Details Component', () => {

    let component: PhotoDetailsComponent;
    let userService: UserService;
    let alertService: AlertService;
    let photoService: PhotoService;
    let router: Router;
    let photo: Photo;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                PhotoDetailsComponent,
                PhotoOwnerOnlyDirective,
                PhotoCommentsComponent
            ],
            providers: [
                PhotoService,
                AlertService,
                UserService
            ],
            imports: [
                RouterTestingModule,
                PhotoModule,
                ReactiveFormsModule,
                VMessageModule
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        photoService = TestBed.get(PhotoService);
        alertService = TestBed.get(AlertService);
        userService = TestBed.get(UserService);
        router = TestBed.get(Router);

        spyOn(photoService, "findById").and.returnValue(of({
            id:1,
            postDate: new Date(),
            url: '/',
            description: 'test',
            allowComments: true,
            likes: 1,
            comments: 1,
            userId: 1,
        }));

        const fixture = TestBed.createComponent(PhotoDetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Should be created', () => {
        expect(component).toBeTruthy();
    });

    it('Should remove a photo', () => {
        const navigateSpy = spyOn(router, "navigate");
        spyOn(alertService, "success").and.returnValue(null);
        spyOn(photoService, "removePhoto").and.returnValue(of({
            photoId: 1,
        }));
        spyOn(userService, "getUserName").and.returnValue('will');
        
        component.remove();

        expect(navigateSpy).toHaveBeenCalledWith(['/user', 'will'], { replaceUrl: true });
    });

    it('Should like a photo', () => {
        photo = { 
            id: 1,
            postDate: new Date(), 
            url: '1',
            description: 'testing',
            allowComments: true,
            likes: 1,
            comments: 1,
            userId: 1,
        } 
        spyOn(photoService, "like").and.returnValue(of(true));
        component.like(photo);
        
        expect(component.like).toBeTruthy();
    });
});