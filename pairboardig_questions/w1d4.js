// Non - Comparison Sorts
// Part 1: Say that I gave you an array of length n, containing the numbers 1..n in jumbled order. 
// "Sort" this array in O(n) time.You should be able to do this without looking at the input.
// Part 2: Say that I give you an array of length n with numbers in the range 1..N(N >= n).
// Sort this array in O(n + N) time.You may use O(N) memory.
// Part 3: Say I give you an array of n strings, each of length k.I claim that, using merge sort, 
// you can sort this in O(knlog(n)), since comparing a pair of strings takes O(k) time.

// I want you to beat that.Sort the strings in O(kn).Hint: do not compare any two strings.
// You may assume all strings contain only lowercase letters a..z without whitespace or punctuation.

function sort1(arr){
    let array = new Array(arr.length + 1);
    return [...array.keys()].slice(1);
}

function sort2(arr, maxVal){
    let counts = new Array(maxVal + 1).fill(0);
    arr.forEach(el => counts[el] += 1);
    arr = []
    counts.forEach((el, i) => {
        for (let i = 0; i < el; i++) {
            arr.push(i)
        }
    }) 
    return arr
}

console.log(sort1([8,2,5,4,1,6,7,3])) // [1,2,3,4,5,6,7,8]
console.log(sort2([8,2,5,4,1,6,7,3])) // [1,2,3,4,5,6,7,8]