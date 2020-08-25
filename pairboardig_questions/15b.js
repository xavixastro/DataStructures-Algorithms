// median
// Given two sorted arrays, find the median element amongst the two arrays.
// That is, if both arrays were combined, find the median element from the combined array.
// Assume that there is not enough memory to actually combine both arrays.
// There exists an O(log n + log m) solution.

// [1,3,3,6,7,8,9] median = 6
// [1,2,3,4,5,6,8,9] median = 4.5 = (4 + 5) % 2
// [1,1,2,3,3,3,4,5,6,6,7,8,8,9,9] median = 5

function median(arr1, arr2) {

    if (arr1.length == 1 && !arr2.length) {
        return arr1[0];
    } else if (arr2.length == 1 && !arr1.length) {
        return arr2[0];
    } else if (arr1.length == 1 && arr2.length === 1) {
        return (arr1[0] + arr2[0]) / 2;
    }

    let median1 = findMedian(arr1)
    let median2 = findMedian(arr2)

    if (median1 > median2) {
        [median1, median2] = [median2, median1];
    }

    if (median1 === median2) {
        return median1;
    } else {
        arr1 = arr1.filter(el => el > median1 && el < median2)
        arr2 = arr2.filter(el => el > median1 && el < median2)
        return median(arr1, arr2)
    }
}


function findMedian(arr) {
    if (arr.length % 2 === 0) {
        return (arr[arr.length / 2] + arr[(arr.length / 2) - 1]) / 2
    } else {
        return arr[Math.floor(arr.length / 2)]
    }
}

console.log(median([1, 3, 6, 7], [1, 3, 6, 9]))
console.log(median([1, 3, 3, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 8, 9]))
