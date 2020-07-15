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

// productify
// Given a list of numbers in an array, replace all the numbers with the product 
// of all other numbers. Do this in O(n) time without using division.

const productify = arr => { //2, 3, 4, 5

    let products = new Array(arr.length).fill(1); //[1, 2, 6, 24]

    let lowerProd = 1; 

    for (let i = 0; i < arr.length; i++) {  // i = 3
        products[i] = products[i] * lowerProd;
        lowerProd = lowerProd * arr[i];
    }

    let upperProd = 1;

    for (let i = arr.length - 1; i >= 0; i--) {
        products[i] = products[i] * upperProd;
        upperProd = upperProd * arr[i];
    }

    return products;

    
}

console.log(productify([2, 3, 4, 5]));