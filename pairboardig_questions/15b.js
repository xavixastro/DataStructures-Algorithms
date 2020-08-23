// median
// Given two sorted arrays, find the median element amongst the two arrays.
// That is, if both arrays were combined, find the median element from the combined array.
// Assume that there is not enough memory to actually combine both arrays.
// There exists an O(log n + log m) solution.

// [1,3,3,6,7,8,9] median = 6
// [1,2,3,4,5,6,8,9] median = 4.5 = (4 + 5) % 2
// [1,1,2,3,3,3,4,5,6,6,7,8,8,9,9] median = 5

function median(arr1, arr2) {


    let median1;
    if (arr1.length % 2 === 0) {
        median1 = (arr1[arr1.length / 2] + arr1[arr1.length / 2]) / 2
    } else {
        median1 = arr1[Math.floor(arr1.length / 2)]
    }


    let median2;
    if (arr2.length % 2 === 0) {
        median2 = (arr2[arr2.length / 2] + arr2[arr2.length / 2]) / 2
    } else {
        median2 = arr2[Math.floor(arr2.length / 2)]
    }


}
