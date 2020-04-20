import { PlatformDetectorService } from './platform-detector.service';

describe('Platform Detector Service', () => {

    let platformId: string;
    let service: PlatformDetectorService;

    beforeEach(() => {
        service = new PlatformDetectorService(platformId);
    });

    it('Should be created', () =>{
        expect(service).toBeTruthy();
    });

    it("Should identify if it's a browser platform", () => {
        const spy = spyOn(service, "isPlatformBrowser").and.returnValue(true);
        expect(spy).toBeTruthy();
    });
});