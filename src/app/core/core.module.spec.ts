import { CoreModule } from './core.module';

describe('Core Module', () => {
    let coreModule: CoreModule;

    beforeEach(() => {
        coreModule = new CoreModule();
    });

    it('Should be created', () => {
        expect(coreModule).toBeTruthy();
    });
});