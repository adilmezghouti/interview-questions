import assert from 'assert';
import checkIfArrayCouldMakeString from './StringMakerChecker';

describe('StringMakerChecker', () => {
    describe('#checkIfArrayCouldMakeString', () => {
        it('should find a match', () => {
            const testInputArrayBucket = 'thisisjustatest';
            const testInputString = 'thisisjustatest';
            assert(checkIfArrayCouldMakeString([...testInputArrayBucket], testInputString));
        });

        it('should find a match', () => {
            const testInputArrayBucket = 'thisisjustatest';
            const testInputString = 'justatest';
            assert(checkIfArrayCouldMakeString([...testInputArrayBucket], testInputString));
        });

        it('should NOT find a match - array does not having all characters needed', () => {
            const testInputArrayBucket = 'thisisjustatest';
            const testInputString = 'you will not find a match for me';
            assert(!checkIfArrayCouldMakeString([...testInputArrayBucket], testInputString));
        });
    });
});
