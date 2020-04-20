import { async, TestBed } from '@angular/core/testing';
import { SignInComponent } from './signin.component';
import { AuthService } from 'src/app/core/auth/auth.service';
import { PlatformDetectorService } from 'src/app/core/platform-detector/platform-detector.service';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { VMessageModule } from 'src/app/shared/components/vmessage/vmessage.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of, throwError } from 'rxjs';

describe('Sign in Component', () => {

    let component: SignInComponent;
    let router: Router;
    let authService: AuthService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SignInComponent],
            imports: [
                ReactiveFormsModule,
                RouterTestingModule,
                VMessageModule,
                HttpClientTestingModule
            ],
            providers: [
                AuthService,
                PlatformDetectorService,                
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        router = TestBed.get(Router);
        authService = TestBed.get(AuthService);
        const fixture = TestBed.createComponent(SignInComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Should be created', () => {
        expect(component).toBeTruthy()
    });

    it('Should login a user', () => {
        const navigateSpy = spyOn(router, "navigate");
        spyOn(authService, "authenticate").and.returnValue(of(null));

        component.loginForm.get('userName').setValue('will');
        component.loginForm.get('password').setValue('12345678');
        component.login();

        expect(navigateSpy).toHaveBeenCalledWith(['user', 'will']);
    });

    it("Should log an error message if there's any error", () => {
        const spyLog = spyOn(console, "log");
        spyOn(authService, "authenticate").and.returnValue(throwError("Invalid user name or password"));

        component.loginForm.get('userName').setValue('will');
        component.loginForm.get('password').setValue('87654321');
        component.login();

        expect(spyLog).toHaveBeenCalledWith("Invalid user name or password");
    })
});