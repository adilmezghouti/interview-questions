import  assert from 'assert';
import findBiggestShape from './BiggestShapeFinder'

describe('BiggestShapeFinder', () => {
    describe('#findBiggestShape', () => {
        it('The biggest shape should have size of 3', () => {
            var matrix = [['.','.','X','X'],['X','.','','.'],['.','X','.','.'],['.','X','X','.']];
            //. . X X
            //X . . .
            //. X . .
            //. X X .
            assert.equal(findBiggestShape(matrix), 3);
        })

        it('The biggest shape should have size of 7', () => {
            var matrix = [['.','.','X','X'],['X','.','X','.'],['.','X','X','.'],['.','X','X','.']];
            //. . X X
            //X . X .
            //. X X .
            //. X X .
            assert.equal(findBiggestShape(matrix), 7);
        })

        it('The biggest shape should have size of 7', () => {
            var matrix = [['.','.','X','.','.'],['.','X','X','X','.'],['.','X','X','X','.'],['.','.','X','.','.']];
            //. . X . .
            //. X X X .
            //. X X X .
            //. . X . .
            assert.equal(findBiggestShape(matrix), 8);
        })
    })
})
