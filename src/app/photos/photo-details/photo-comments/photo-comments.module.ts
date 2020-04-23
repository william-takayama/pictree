import { NgModule } from '@angular/core';
import { PhotoCommentsComponent } from './photo-comments.component';
import { CommentOwnerOnlyDirective } from './comment-owner-only/comment-owner-only.directive';
import { CommonModule } from '@angular/common';
import { VMessageModule } from 'src/app/shared/components/vmessage/vmessage.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ShowIfLoggedModule } from 'src/app/shared/directives/show-if-logged/show-if-logged.module';

@NgModule({
    declarations: [
        PhotoCommentsComponent,
        CommentOwnerOnlyDirective
    ],
    exports: [
        PhotoCommentsComponent,
        CommentOwnerOnlyDirective
    ],
    imports: [
        CommonModule,
        VMessageModule,
        RouterModule,
        ReactiveFormsModule,
        ShowIfLoggedModule
    ]
})
export class PhotoCommentsModule { }