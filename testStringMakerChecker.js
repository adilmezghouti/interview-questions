import assert from 'assert';
import checkIfArrayCouldMakeString from './StringMakerChecker';

describe('StringMakerChecker', () => {
    describe('#checkIfArrayCouldMakeString', () => {
        it('should find a match', () => {
            const testInuptArray = 'thisisjustatest';
            const testInputString = 'thisisjustatest';
            assert(checkIfArrayCouldMakeString([...testInuptArray], testInputString));
        });

        it('should NOT find a match', () => {
            const testInuptArray = 'thisisjustatest';
            const testInputString = 'you will not find me';
            assert(!checkIfArrayCouldMakeString([...testInuptArray], testInputString));
        });
    });
});
