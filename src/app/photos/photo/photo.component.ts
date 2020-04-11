import { Component, Input } from '@angular/core';

// Object js
@Component({
    selector: 'ap-photo', // ap = AluraPick
    templateUrl: 'photo.component.html'
})

export class PhotoComponent {

    @Input() description = ''; // app.component.html gets the attributes
    @Input() url = '';
}