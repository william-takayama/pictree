import { async, TestBed } from '@angular/core/testing';
import { SignUpComponent } from './signup.component';
import { SignupService } from './signup.service';
import { UserNotTakenValidatorService } from './user-not-taken.validator.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { VMessageModule } from 'src/app/shared/components/vmessage/vmessage.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { of, throwError } from 'rxjs';

describe('Signup Form', () => {

    let component: SignUpComponent;
    let router: Router;
    let signupService: SignupService;

    beforeEach(async(() =>{
        TestBed.configureTestingModule({
            declarations: [SignUpComponent],
            providers: [
                SignupService,
                UserNotTakenValidatorService
            ],
            imports: [
                HttpClientTestingModule,
                VMessageModule,
                ReactiveFormsModule,
                RouterTestingModule
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        router = TestBed.get(Router);
        signupService = TestBed.get(SignupService);
        const fixture = TestBed.createComponent(SignUpComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Should be created', () => {
        expect(component).toBeTruthy();
    });

    it('Should register a user', () => {
        const navigateSpy = spyOn(router, "navigate");
        spyOn(signupService, 'signup').and.returnValue(of(null));

        component.signupForm.get('email').setValue('will@hotmail.com');
        component.signupForm.get('fullName').setValue('will');
        component.signupForm.get('userName').setValue('will');
        component.signupForm.get('password').setValue('12345678');
        component.signUp(); 

        expect(navigateSpy).toHaveBeenCalledWith([""]);
    });

    it("Should log a message if there's any error", () => {
        const spyLog = spyOn(console, "log");
        spyOn(signupService, "signup").and.returnValue(throwError("Server error"));

        component.signupForm.get('email').setValue('will@hotmail.com');
        component.signupForm.get('fullName').setValue('will');
        component.signupForm.get('userName').setValue('will');
        component.signupForm.get('password').setValue('12345678');
        
        component.signUp();
        expect(spyLog).toHaveBeenCalledWith("Server error");
    });
});