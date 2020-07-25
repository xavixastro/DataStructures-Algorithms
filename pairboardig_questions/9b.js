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


// is_shuffle ?
// Given three strings, return whether the third is an interleaving of the first two.
// Interleaving means it only contains characters from the other two, no more no less, 
// and preserves their character ordering. "abdecf" is an interleaving of "abc" and "def".
// Note that the first two strings needn't be in alphabetical order like these.

// You may assume that the first two strings do not contain any characters in common.

// Next, relax the assumption that the first two strings contain no overlap.
// Analyze the time - complexity of your solution.You may wish to view this problem recursively.

// Example:

// interleaving ? ('XXZ', 'XXY', 'XXYXXZ')
// => true

// Note: make sure you can answer why this won't work with your initial implementation.

const interleaving = (str1, str2, str3) => {
    let idx1 = 0;
    let idx2 = 0;
    for (let i = 0; i < str3.length; i++) {
        if (str3[i] === str1[idx1]) {
            idx1++;
        } else if (str3[i] === str2[idx2]) {
            idx2++;
        } else {
            return false;
        }
    }
    return true;
}

console.log(interleaving('abc', 'def', 'abdecf')) //true;
console.log(interleaving('abc', 'def', 'abedcf')) //false;
console.log(interleaving('XXZ', 'XXY', 'XXYXXZ')) //true;