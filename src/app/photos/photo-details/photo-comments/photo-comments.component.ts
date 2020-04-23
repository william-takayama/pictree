import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

import { PhotoService } from '../../photo/photo.service';
import { PhotoComment } from '../../photo/photo-comment';
import { AlertService } from 'src/app/shared/components/alert/alert.service';
import { UserService } from 'src/app/core/user/user.service';
import { Router } from '@angular/router';

@Component({
    selector: 'ap-photo-comments',
    templateUrl: './photo-comments.component.html',
    styleUrls: ['photo-comments.scss']
})
export class PhotoCommentsComponent implements OnInit {
    
    @Input() photoId: number; 

    commentId: number;
    commentForm: FormGroup;
    comments$: Observable<PhotoComment[]>;
    
    constructor(
        private photoService: PhotoService,
        private formBuilder: FormBuilder,
        private alertService: AlertService,
        private userService: UserService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.comments$ = this.photoService.getComments(this.photoId);   
        this.commentForm = this.formBuilder.group({
            comment: [
                '', 
                [
                    Validators.required,
                    Validators.maxLength(300)
                ]
            ]
        });        
    } 

    save() {
        if(this.userService.isLogged()) {
            const comment = this.commentForm.get('comment').value as string;
            this.comments$ = this.photoService
                .addComment(this.photoId, comment)
                .pipe(switchMap(() => this.photoService.getComments(this.photoId)))
                .pipe(tap(() => {
                    this.commentForm.reset();
                    this.alertService.success('Comment has been added!');
                }));
        } else {
            this.alertService.warning('Login before comment', true);
            this.router.navigate(['']);
        }
    };

    remove(comment) {
        const id = comment.commentId;
        this.comments$ = this.photoService
            .removeComment(this.photoId, id)
            .pipe(switchMap(() => this.photoService.getComments(this.photoId)))
            .pipe(tap(() => {
                    this.alertService.success('Comment removed', true);                    
                },
                err => {
                    console.log(err);
                    this.alertService.danger('Could not delete the comment', true);
                }
            ))
    };
}
