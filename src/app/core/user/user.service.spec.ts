import { UserService } from './user.service';
import { TestBed } from '@angular/core/testing';

describe('User service', () => {
    let userService: UserService;
    
    beforeEach(() => {
        // When having many dependencies (providers), you should use TestBed - it simulates a mini module
        TestBed.configureTestingModule({
            providers: [UserService]
        });
        userService = TestBed.get(UserService);
    });

    it('Should be created', () => {
        expect(userService).toBeTruthy();
    });

    it("Should recover user's info using a token", () => {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwibmFtZSI6IndpbGwiLCJlbWFpbCI6IndpbGxAd2lsbC5jb20iLCJpYXQiOjE1ODczMzE4MTAsImV4cCI6MTU4NzQxODIxMH0.R9w8zcFrcesxWqAhIJ6BFgJRCKBogNPjj2PfeCUY4BM';
        userService.setToken(token);
        expect(userService.isLogged()).toBeTruthy();
        expect(userService.getUserName()).toBe("will");
        userService.getUser().subscribe(user => {
          expect(user.name).toBe("will");
        });
    });
    
    it('Should clean the info on logout', () => {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwibmFtZSI6IndpbGwiLCJlbWFpbCI6IndpbGxAd2lsbC5jb20iLCJpYXQiOjE1ODczMzE4MTAsImV4cCI6MTU4NzQxODIxMH0.R9w8zcFrcesxWqAhIJ6BFgJRCKBogNPjj2PfeCUY4BM';
        userService.setToken(token);
        userService.logout();
        expect(userService.isLogged()).toBeFalsy();
        expect(userService.getUserName()).toBe("");
    });
});