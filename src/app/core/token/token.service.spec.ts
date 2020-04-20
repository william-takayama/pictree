import { TokenService } from './token.service';

describe('Token Service', () => {
    let token: string;
    let service: TokenService;

    beforeEach(() => {
        token = 'tokentest';
        service = new TokenService();
    }); 

    // Smoke test - test if the class or service can be instantiated
    it('Should be created', () => {
        expect(service).toBeTruthy();
    });

    it('Should set and store token', () => {
        service.setToken(token);
        expect(service.hasToken()).toBeTruthy(); 
        expect(service.getToken()).toBe('tokentest');
    });

    it('Should remove a token', () => {
        service.setToken(token);
        service.removeToken();
        expect(service.hasToken()).toBeFalsy();
        expect(service.getToken()).toBeFalsy();
    });

    afterEach(() => {
        localStorage.clear();
    });
});