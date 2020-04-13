import { NgModule } from '@angular/core';
import { AlertComponent } from './alert.component';
import { AlertService } from './alert.service';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [AlertComponent],
    exports: [AlertComponent],
    imports: [CommonModule],
    providers: [AlertService]
})
export class AlertModule { 

}