// matrix_region_sum
// Given a matrix of integers and coordinates of a rectangular region within the 
// matrix, find the sum of numbers falling inside the rectangle.

// [
//     [2,4,5],
//     [6,3,6],
//     [6,1,3]
// ]
// [1,1], [2,2]

const matrixRegionSum = (matrix, topLeft, rightBottom) => {
    let sum = 0;
    let limitRow = rightBottom[0];
    let limitCol = rightBottom[1];
    let startRow = topLeft[0];
    let startCol = topLeft[1];

    for (let i = startRow; i <= limitRow; i++) {
        for (let j = startCol; j <= limitCol; j++) {
            sum += matrix[i][j];
        } 
    }

    return sum;
}

let matrix =    [
                    [2,4,5],
                    [6,3,6],
                    [6,1,3]
                ]


console.log(matrixRegionSum(matrix, [1,1], [2,2])); //13

// merge_sort
// Implement merge sort.


const mergerSort = arr = {
  if (arr.length < 2) return arr;

  middle = arr.count / 2
  left, right = arr.take(middle), arr.drop(middle)

  sorted_left, sorted_right = merge_sort(left), merge_sort(right)

  merge(sorted_left, sorted_right)
}


def merge(left, right)
  merged_array = []
  until left.empty? || right.empty?
    merged_array <<
      ((left.first < right.first) ? (left.shift) : (right.shift))
  end

  merged_array + left + right
end
