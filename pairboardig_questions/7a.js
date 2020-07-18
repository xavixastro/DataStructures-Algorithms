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


// weighted_random_index
// Given an array, write a function that will return a random index of the array.
// The probability of an index being returned is weighted by the value at that index 
// against the sum of the array values.For example, for the array[4, 6, 8], index 0 
// should be returned with 4 in 18 odds, index 1 should be returned with 6 in 18 odds, 
// and index 2 should be return with 8 in 18 odds.Implement this in O(n) time.

const randomIndex = arr => {
    let sum = arr.reduce((acc, ele) => acc + ele); //18
    let rand = Math.random(); //0.64
    let chance = 0;
    for (let i = 0; i < arr.length; i++) {
        chance += (arr[i] / sum); //0.27
        if (rand <= chance) return i;
    }
}


console.log(randomIndex([1, 4, 13]))