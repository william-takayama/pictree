import { Directive, Input, ElementRef, Renderer, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/user/user.service';
import { PhotoComment } from 'src/app/photos/photo/photo-comment';

@Directive({
    selector: '[commentOwnerOnly]'
})
export class CommentOwnerOnlyDirective implements OnInit { 

    @Input() ownedComment: PhotoComment;

    constructor(
        private element: ElementRef<any>,
        private renderer: Renderer,
        private userService: UserService
    ) { }

    ngOnInit(): void {
        this.userService
            .getUser()
            .subscribe(user => {
                // if user not logged OR user.id differs from ownedPhoto.userId
                if(!user || user.name != this.ownedComment.userName) {
                    this.renderer.setElementStyle(this.element.nativeElement, 'display', 'none');
                }
            })
    }
}