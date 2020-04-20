import { TestBed, fakeAsync, tick } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserService } from '../user/user.service';

describe('AuthService', () => {
  let service: AuthService;
  let httpMock: HttpTestingController;
  let userService: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService]
    });
    service = TestBed.get(AuthService);
    httpMock = TestBed.get(HttpTestingController);
    userService = TestBed.get(UserService);
  });

  it('Should be created', () => {
    expect(service).toBeTruthy();
  });
  // fakeAsync - simulate async functions
  it('Should authenticate the user', fakeAsync(() => {
    const fakeBody = {
      id: 1,
      name: 'will',
      email: 'will@hotmail.com'
    };

    // Avoid creating a valid token - substitute 'this.userService.setToken(authToken);'
    const spy = spyOn(userService, "setToken").and.returnValue(null);

    service.authenticate('will', '12345678')
      .subscribe(response => {
        expect(response.body).toEqual(fakeBody);
        expect(spy).toHaveBeenCalledWith('tokenTest');
      });
    // Object to simulate the CALLING of request and return which method  
    const request = httpMock.expectOne((req) => {
      return req.method === 'POST';
    });
    // Flush = return the request
    request.flush(fakeBody, {
      headers: { 'x-access-token': 'tokenTest' }
    });
    // simulate time passaging
    tick();
  }));
});
