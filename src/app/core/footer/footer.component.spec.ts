import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FooterComponent } from './footer.component';
import { UserService } from '../user/user.service';
import { of } from 'rxjs';

describe('Component Footer', () => {
    let component: FooterComponent;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            declarations: [FooterComponent],
            providers: [UserService]
        }).compileComponents(); // Recommendation from Angular
    }));

    beforeEach(() => {

        const userService = TestBed.get(UserService);

        spyOn(userService, "getUser").and.returnValue(of({
            email: 'will@hotmail.com',
            name: 'will',
            id: 5
        }));

        const fixture = TestBed.createComponent(FooterComponent);
        component = fixture.componentInstance; // extract component
        fixture.detectChanges(); // detect lifecycles (ngOnInit)
    });

    it('Should be created', () => {
        expect(component).toBeTruthy();
    });
});