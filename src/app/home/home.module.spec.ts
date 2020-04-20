import { HomeModule } from './home.module';

describe('Home Module', () => {
    let homeModule: HomeModule;

    beforeEach(() => {
        homeModule = new HomeModule();
    });

    it('Should be created', () => {
        expect(homeModule).toBeTruthy();
    });
});