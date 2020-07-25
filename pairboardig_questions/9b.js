// find_missing_number
// Assume an array of non - negative integers.A second array is formed by shuffling 
// the elements of the first array and deleting a random element.Given these two arrays, 
// find which element is missing in the second array.Do this in linear time with constant memory use.

// const findMissingNumber = (arr1, arr2) => {
//     let missingNum = null;
//     arr1.forEach (el => {
//         let idx = arr2.indexOf(el);
//         if (idx === -1) {
//             missingNum = el;
//         } else {
//             arr2.splice(idx, 1)
//         }
//     });
//     return missingNum;
// }

const findMissingNumber = (arr1, arr2) => {
    let total1 = arr1.reduce((acc, ele) => acc + ele );
    let total2 = arr2.reduce((acc, ele) => acc + ele );
    return total1 - total2;
}

let arr1 = [5, 5, 3, 68, 3, 2, 23, 7, 9, 54, 2];
let arr2 = [2, 7, 23, 3, 68, 54, 5, 5, 2, 3];

console.log(findMissingNumber(arr1, arr2)) //9