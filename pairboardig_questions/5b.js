// binary_search
// Implement binary search

const binarySearch = (arr, target) => {
    debugger
    if (!arr.length) return -1; 
    let midIdx = Math.floor(arr.length/2);
    let midEle = arr[midIdx];
    if (midEle === target) return midIdx;
    if (midEle > target) {
        return binarySearch(arr.slice(0, midIdx), target)
    } else {
        let result = binarySearch(arr.slice(midIdx + 1), target);
        return result === -1 ? -1 : midIdx + 1 + result; 
    }
}

console.log(binarySearch([2, 3, 6, 9, 11, 12, 13, 28, 56, 99], 1)) //-1
console.log(binarySearch([2, 3, 6, 9, 11, 12, 13, 28, 56, 99], 12)) //5
console.log(binarySearch([2, 3, 6, 9, 11, 12, 13, 28, 56, 99], -6)) //-1
console.log(binarySearch([2, 3, 6, 9, 11, 12, 13, 28, 56, 99], 99)) //9
console.log(binarySearch([2, 3, 6, 9, 11, 12, 13, 28, 56, 99], 2)) //0