// Non - Comparison Sorts
// Part 1: Say that I gave you an array of length n, containing the numbers 1..n in 
// jumbled order. "Sort" this array in O(n) time.You should be able to do this without 
// looking at the input.


const nonComparison1 = arr => {
    return [...arr.concat(undefined).keys()].slice(1)
}

// Part 2: Say that I give you an array of length n with numbers in the range 1..N(N >= n).
// Sort this array in O(n + N) time.You may use O(N) memory.

const nonComparison2 = arr => {
    let sortedArr = Array(arr.length);
    arr.forEach(el => sortedArr[el-1] = el);
    return sortedArr;
}

// Part 3: Say I give you an array of n strings, each of length k.I claim that, using 
// merge sort, you can sort this in O(knlog(n)), since comparing a pair of strings takes O(k) time.

// I want you to beat that.Sort the strings in O(kn).Hint: do not compare any two strings.
// You may assume all strings contain only lowercase letters a..z without whitespace or punctuation.


let arr = [7, 3, 1, 6, 9, 2, 4, 5, 8]
// console.log(nonComparison1(arr));
console.log(nonComparison2(arr));