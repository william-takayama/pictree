import { isLowerCase } from "./lower-case.validator";

describe("Function isLowerCase", () => {
    it('Should validate when receives a lower case text', () => {
        const value = 'mario';
        const result = isLowerCase(value);
        expect(result).toBeTruthy();
    });
    it('Should validate when the sent value is not lower case', () => {
        expect(isLowerCase('Mario')).toBeFalsy();
    });
});