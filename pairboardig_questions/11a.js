// permutations
// Write a method that takes an array and returns all its permutations.
// Time / memory complexity should be proportional to the number of permutations; what is this ?

const permutations = arr => { //[1, 2, 3]
    if (!arr.length) return [];
    if (arr.length === 1) return [arr];
    let ele = arr[0]; //1
    let perms = [];
    let otherPermutations = permutations(arr.slice(1)); //[[7]]
    otherPermutations.forEach(perm => {
        for (let i = 0; i <= perm.length; i++) {
            perms.push([...perm.slice(0, i), ele, ...perm.slice(i)])
        }
    })
    return perms;
}

// console.log(permutations([1, 2]));
console.log(permutations([1, 2, 3])) //[1, 2, 3], [2, 1, 3], [2, 3, 1], [1, 3, 2], [3, 1, 2], [3, 2, 1]]