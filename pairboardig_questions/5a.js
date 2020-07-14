// matrix_region_sum
// Given a matrix of integers and coordinates of a rectangular region within the 
// matrix, find the sum of numbers falling inside the rectangle.

const matrixRegionSum = (matrix, topLeft, rightBottom) => {
    let sum = 0;
    let limitX = rightBottom[0];
    let limitY = rightBottom[1];
    let x = topLeft[0];
    let y = topLeft[1];
    let width = limitY - y;
    let height = limitX - x;


    while (true) {
        sum += matrix[x][y];
        y++;
    }
}