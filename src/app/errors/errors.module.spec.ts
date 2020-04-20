import { ErrorsModule } from './errors.module';

describe('ErrorsModule', () => {
  let errorsModule: ErrorsModule;

  beforeEach(() => {
    errorsModule = new ErrorsModule();
  });

  it('Should be created', () => {
    expect(errorsModule).toBeTruthy();
  });
});
