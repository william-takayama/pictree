import { async, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { UserService } from '../user/user.service';
import { RouterTestingModule } from '@angular/router/testing';
import { MenuModule } from 'src/app/shared/components/menu/menu.module';
import { AlertModule } from 'src/app/shared/components/alert/alert.module';
import { LoadingModule } from 'src/app/shared/components/loading/loading.module';
import { of } from 'rxjs';
import { Router } from '@angular/router';

describe('Header Component', () => {

    let component: HeaderComponent;
    let userService: UserService;
    let router: Router;

    beforeEach(async() => {
        TestBed.configureTestingModule({
            declarations: [HeaderComponent],
            providers: [UserService],
            imports: [
                RouterTestingModule.withRoutes([]),
                MenuModule,
                AlertModule,
                LoadingModule
            ]
        }).compileComponents;
    });

    beforeEach(() => {
        userService = TestBed.get(UserService);
        router = TestBed.get(Router);
        spyOn(userService, "getUser").and.returnValue(of({
            name: 'will',
            email: 'will@hotmail.com',
            id: 5
        }));

        const fixture = TestBed.createComponent(HeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Should be created', () => {
        expect(component).toBeTruthy();
    });

    it('Should logout', () => {
        const spy = spyOn(userService, "logout").and.returnValue(null);
        // const navigateSpy = spyOn(router, "navigate");
        component.logout();
        expect(spy).toHaveBeenCalled();
        // expect(navigateSpy).toHaveBeenCalledWith([""]);
    });
});
