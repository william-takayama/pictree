import { HomeRoutingModule } from './home.routing.module';


describe('Home Routing Module', () => {
    let homeRoutingModule: HomeRoutingModule;

    beforeEach(() => {
        homeRoutingModule = new HomeRoutingModule();
    });

    it('Should be created', () => {
        expect(homeRoutingModule).toBeTruthy();
    });
});