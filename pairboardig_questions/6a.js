// subsets
// Write a function that takes an array and returns all of its subsets. 
// How many sets will it return?

// subsets(["a", "b", "c"]);
// [[], ["c"], ["b"], ["c", "b"], ["a"], ["c", "a"], ["b", "a"], ["c", "b", "a"]];




const subsets = arr => {  //["b"]
    // debugger
    if (!arr.length) return [[]];
    if (arr.length === 1) return [[], arr.slice()];
    let ele = arr.shift(); //'a'
    let subs = subsets(arr); //[[], ['b']]
    let newSubs = subs.map(sub => sub.concat(ele)) //[['a'], ['b', 'a']]
    return [...subs, ...newSubs ];
}

console.log(subsets(["a", "b", "c"]));


// longest_palindrome
// Write a function that will take a string and return the indices of the start/end 
// of the longest palindrome it contains.

// Example:

// longest_palindrome('acapella') => [0, 2]

function longestPalindrome(str){
    let longest = 0;
    let indices = null;

    for (let i = 0; i < str.length; i++) {
        for (let j = i; j < str.length; j++) {
            let sub = str.slice(i, j + 1);
            if (isPalindrome(sub) && sub.length > longest) {
                longest = sub.length; 
                indices = [i, j];
            }
        }
    }
    return indices; 
}

function isPalindrome(str){
    return str === [...str].reverse().join('');
}

console.log(longestPalindrome('acapella')) //=> [0, 2]
