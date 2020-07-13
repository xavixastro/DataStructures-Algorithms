// uniq_subs
// Write a method that finds all the unique substrings for a word.

const uniqSubs = str => {
    let subs = {}
    for (let i = 0; i < str.length; i++) {
        for (let j = i; j < str.length; j++) {
            let sub = str.slice(i, j + 1);
            if (!subs[sub]) subs[sub] = true;
        }
    }
    return Object.keys(subs);
}

console.log(uniqSubs('hello'));
console.log(uniqSubs('aaa'));
console.log(uniqSubs('mike'));

// largest_contiguous_subsum
// Given an array of integers (positive and negative) find the largest contiguous 
// subsum (sum of a subarray).

// You can solve this trivially in O(n**2) time by considering all subarrays. 
// Try to solve it in O(n) time with O(1) memory.


//[5000, -1000, 50, 5000]
//[100, 5, -1000, 3000]
//[100, 5, -1000, 100, -5, 100]

const largestContiguousSubsum = arr => { 
    let largest; //5000
    let currentSum; 

    for (let i = 0; i < arr.length; i++) {
        if (i === 0) {
            largest = arr[i];
            currentSum = arr[i];
        } else {
            currentSum += arr[i];
            if (currentSum > largest) {
                largest = currentSum;
            }
            if (currentSum < 0) {
                currentSum = 0;
            }
        }
    }

    return largest;
}

console.log(largestContiguousSubsum([5000, -1000, 50, 5000]));
console.log(largestContiguousSubsum([100, 5, -1000, 3000]));
console.log(largestContiguousSubsum([100, 5, -1000, 100, -5, 100]));