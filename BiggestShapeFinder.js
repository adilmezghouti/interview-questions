const shapeHunter = (matrix, r, c, total) => {
    if (matrix[r] && matrix[r][c] === 'X') {
        total.val++;
        matrix[r][c] = '-';
        shapeHunter(matrix, r + 1, c, total);
        shapeHunter(matrix, r, c + 1, total);
        shapeHunter(matrix, r, c - 1, total);
    }
}

const findBiggestShape = (matrix) => {
    var total = {val:0};
    let biggestShapeSize = 0;

    for (let row=0;row < matrix.length;row++) {
        for (let column=0;column < matrix[0].length;column++) {
          if (matrix[row][column] === 'X') {
            shapeHunter(matrix,row,column, total);     
            biggestShapeSize = biggestShapeSize < total.val ? total.val : biggestShapeSize;
            total.val = 0;      
          }
        }
    }
    
    return biggestShapeSize;
}

export default findBiggestShape;