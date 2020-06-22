// range(start, end) - receives a start and end value, 
// returns an array from start up to end


let range = (start, end) => {
    if (start === end) return [start]
    return [start, ...range(start+1, end)]
}

// sumRec(arr) - receives an array of numbers and recursively sums them

let sumRec = arr => {
    if (!arr.length) return 0;
    return arr[0] + sumRec(arr.slice(1))
}

// exponent(base, exp) - receives a base and exponent, 
// returns the base raise to the power of the exponent(base ^ exp)

let exponent = (base, exp) => {
    if (exp === 0) return 1;
    return base * exponent(base, exp-1)
}


// fibonacci(n) - receives an integer, n, and returns the first n Fibonacci numbers

let fibonacci = n => {
    if (n === 1) return [0];
    if (n === 2) return [0, 1];
    let prev = fibonacci(n - 1); //[0, 1]
    prev.push(prev[prev.length-1] + prev[prev.length-2])
    return prev;
}

// deepDup(arr) - deep dup of an Array!

let deepDup = arr => {
    let newArr = [];
    arr.forEach(el => {
        if (!Array.isArray(el)) {
            newArr.push(el)
        } else {
            newArr.push(deepDup(el))
        }
    })
    return newArr
}

// bsearch(arr, target) - receives a sorted array, 
// returns the index of the target or - 1 if not found

let bsearch = (arr, target) => {
    let mid = Math.floor(arr.length / 2);
    if (!arr.length) return -1;
    if (arr[mid] === target) return mid;
    if (arr[mid] > target) {
        return bsearch(arr.slice(0, mid), target)
    } else {
        let result = bsearch(arr.slice(mid+1), target)
        return (result === -1) ? result : mid + 1 + result;
    }

}


// mergesort(arr) - receives an array, returns a sorted copy of the array 
// by implementing merge sort sorting algorithm

let merge = (arr1, arr2) => {
    merged = []
    while (arr1.length && arr2.length){
        arr1[0] > arr2[0] ? merged.push(arr2.shift(1)) : merged.push(arr1.shift(1))
    }
    return merged.concat(arr1).concat(arr2);
}

let mergesort = arr => {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    return merge(mergesort(left), mergesort(right))
}
