// move_zeros
// Given an array, move all zeros to the end.
// The order of non - zero elements does not matter.Ex:

// move_zeros([1, 2, 0, 3, 4, 0, 5, 6, 0]) == [1, 2, 6, 3, 4, 5, 0, 0, 0]
// Algorithm should be O(n); use O(1) extra space.

const moveZeros = arr => {
    let pointer = arr.length - 1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[pointer] != 0) {
            let sub = arr.splice(pointer, 1);
            arr.unshift(sub[0]);
        } else {
            pointer--;
        }
    }
    return arr;
}

console.log(moveZeros([1, 2, 0, 3, 4, 0, 5, 6, 0])) //[1, 2, 6, 3, 4, 5, 0, 0, 0]