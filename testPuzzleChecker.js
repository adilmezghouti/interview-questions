import assert from 'assert';
import puzzleChecker from './PuzzleChecker';

describe('PuzzleChecker', () => {
    const puzzle = [];

    before(() => {
        puzzle.push('ABCDEF');
        puzzle.push('KNJHDH');
        puzzle.push('XYCBKA');
        puzzle.push('ABCAEF');
        puzzle.push('KNJHRH');
        puzzle.push('XNCBKA');
    });

    describe('#findCharacterInPuzzle', () => {
        it('should find character in puzzle', () => {
            assert.deepEqual(puzzleChecker.findLocationsOfCharacterInPuzzle(puzzle, 'J')[0], { x: 1, y: 2 });
        });

        it('should NOT find character in puzzle', () => {
            assert(puzzleChecker.findLocationsOfCharacterInPuzzle(puzzle, '0').length === 0);
        });
    });

    describe('#findNextLocation', () => {
        it('should find word in puzzle', () => {
            const location = { x: 2, y: 2 };
            assert(puzzleChecker.findNextLocation(puzzle, location, 'CAR'));
        });

        it('should find word in puzzle - upper', () => {
            const location = { x: 2, y: 2 };
            assert(puzzleChecker.findNextLocation(puzzle, location, 'JC'));
        });

        it('should find word in puzzle - upper diagonal', () => {
            const location = { x: 2, y: 1 };
            assert(puzzleChecker.findNextLocation(puzzle, location, 'JD'));
        });

        it('should find word in puzzle - right', () => {
            const location = { x: 2, y: 2 };
            assert(puzzleChecker.findNextLocation(puzzle, location, 'BKA'));
        });

        it('should find word in puzzle - lower', () => {
            const location = { x: 2, y: 2 };
            assert(puzzleChecker.findNextLocation(puzzle, location, 'CJC'));
        });

        it('should find word in puzzle - lower diagonal', () => {
            const location = { x: 2, y: 2 };
            assert(puzzleChecker.findNextLocation(puzzle, location, 'AR'));
        });

        it('should find NOT word in puzzle', () => {
            const location = { x: 2, y: 2 };
            assert(!puzzleChecker.findNextLocation(puzzle, location, 'CART'));
        });
    });

    describe('#checkPuzzle', () => {
        it('should find word in puzzle', () => {
            assert(puzzleChecker.checkPuzzle(puzzle, 'CAR'));
        });

        it('should NOT find word in puzzle', () => {
            assert(!puzzleChecker.checkPuzzle(puzzle, 'YOU CANT FIND ME'));
        });
    });
});
