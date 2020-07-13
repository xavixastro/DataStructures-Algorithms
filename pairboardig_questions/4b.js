// silly_years
// Write a function that takes a year (four digit integer) and returns an array 
// with the 10 closest subsequent years that meet the following condition: the 
// first two digits summed with the last two digits are equal to the middle two 
// digits. E.g.,

// 1978 => 19 + 78 = 97
// 2307 => 23 + 07 = 30
 
      
     

const sumNumsEqualToMiddle = (num) => {
  let middle = Math.floor(num / 10) % 100;
  let sum = Math.floor(num / 100) + (num % 100);
  return middle === sum;
};

const sillyYears = year => {
    let arr = [];
    while (arr.length < 10) {
        year += 1;
        if (sumNumsEqualToMiddle(year)) arr.push(year);
    }
    return arr;
}


console.log(sillyYears(1950));

// pair_sum
// Given an array of integers, return all pairs that sum up to a specified value k.
// List the pairs in [min, max] order.

const pairSum = (arr, k) => {
    let pairs = [] 
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            let pair = [arr[i], arr[j]].sort();
            if (pair[0] + pair[1] === k) pairs.push(pair);
        }
    }
    return pairs; 
}

console.log(pairSum([1, 2, -1], 0)         ) //<Set: {[-1, 1]}>
console.log(pairSum([1, 2, -1, -1], 0)     ) //<Set: {[-1, 1]}>
console.log(pairSum([1, 2, -1, -1, -2], 0) ) //<Set: {[1, 1], [-2, 2]}>
console.log(pairSum([1, 2, -1, -1, -2], 1) ) //<Set: {[-1, 2]}>
console.log(pairSum([1, 2, -1, -1, -2], -1)) //<Set: {[-2, 1]}>



