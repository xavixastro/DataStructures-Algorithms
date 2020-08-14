// print_spiral
// Given a square matrix in the form of a 2D array - of - arrays, return an array 
// consisting of the values of the array in "spiral order"(top row, then right hand side, 
// then bottom in reverse, then up, the back again...).

function printSpiral(matrix){
    let spiral = matrix[0];
    for (let i = 1; i < matrix.length; i++) {
        spiral.push(matrix[i][matrix[i].length - 1])
    }
    spiral = spiral.concat(matrix[matrix.length - 1].reverse());
    for (let i = matrix.length - 1; i > 0; i--) {
        spiral.push(matrix[i][0])
    }
    return spiral;
}