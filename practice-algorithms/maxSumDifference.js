// Given an array of integers.Find two disjoint contiguous sub - arrays such that 
// the absolute difference between the sum of two sub - array is maximum.
// The sub - arrays should not overlap.

//     eg - [2 - 1 - 2 1 - 4 2 8] ans - (-1 - 2 1 - 4) (2 8), diff = 16


function maxSumDifference (arr) {
    let splitPoint = 1;
    let maximum = 0;
    while (splitPoint < arr.length) {
        let leftArr = arr.slice(0, splitPoint)
        let rightArr = arr.slice(splitPoint)
        if (Math.abs(findLargest(rightArr) - findLowest(leftArr)) > maximum){
            maximum = Math.abs(findLargest(rightArr) - findLowest(leftArr));
        }
        splitPoint++;
    }
    return maximum
}

function findLowest(arr){
    debugger
    let startingPoint = 0;
    let lowestSum = arr.slice(0).reduce((acc, val) => acc + val)
    for (let i = 0; i < arr.length; i++) {
        let currentSum = arr.slice(i).reduce((acc, val) => acc + val)
        if (currentSum < lowestSum) {
            lowestSum = currentSum;
            startingPoint = i;
        }
    }
    return lowestSum
}

function findLargest(arr) {
    let endingPoint = 1;
    let largestSum = arr.slice(0, 1).reduce((acc, val) => acc + val)
    for (let i = 1; i <= arr.length; i++) {
        let currentSum = arr.slice(0, i).reduce((acc, val) => acc + val)
        if (currentSum > largestSum) {
            largestSum = currentSum;
            endingPoint = i;
        }
    }
    return largestSum
}


maxSumDifference([2, -1, -2, 1, -4, 2, 8])
// findLowest([2, -1, -2, 1, -4])