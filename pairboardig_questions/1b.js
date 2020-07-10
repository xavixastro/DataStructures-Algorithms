// longest_common_substring
// Write a function, longest_common_substring(str1, str2) that takes two strings and 
// returns the longest common substring. A substring is defined as any consecutive 
// slice of letters from another string.

// Bonus: solve it in O(m * n) using O(m * n) extra space. 
// (Hint: the solution involves dynamic programming which will be introduced later in the course.)

const longest_common_substring = (str1, str2) => {
    let longest = ''
    for (let i = 0; i < str1.length; i++) {
        for (let j = i; j < str1.length; j++) {
            let sub = str1.slice(i, j+1);
            if (str2.indexOf(sub) >= 0 && sub.length > longest.length) {
                longest = sub;
            }
        }
    }
    return longest;
}

console.log(longest_common_substring('vhvhsvihaleluxt', 'bvhaleluwwdvsdo')); //halelu
console.log(longest_common_substring('roruoptsuyiouy', 'cvbnxzssmnbmbv')); //s
console.log(longest_common_substring('azzyigrjp', 'uirbhbvklazjkhjbjzzazjnazzkbhbh')); //azz


// sum_rec
// Write a function that takes an array of integers and returns their sum. Use recursion.

const sumRec = (arr) => {
    // return arr.reduce((acc, ele) => acc + ele, 0)
    if (!arr.length) return 0;
    return arr[0] + sumRec(arr.slice(1));
}

console.log(sumRec([1,2,3,4,5])); //15
console.log(sumRec([5, 5, 5])); //15
console.log(sumRec([])); //0
console.log(sumRec([16, 2, 10, 7])); //35
console.log(sumRec([1,1,13])); //15