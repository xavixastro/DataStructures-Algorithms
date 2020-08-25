// duplicates(from LeanData)
// Write a method that takes an array and returns its duplicate values.Use less than O(n * n) time.

const duplicates = arr => {
    let dups = {};
    arr.forEach(el => {
        if (dups[el]) {
            dups[el] += 1;
        } else {
            dups[el] = 1;
        }
    })
    let res = []

    for (let [key, value] of Object.entries(dups)) {
        if (value > 1) res.push(key)
    }

    return res;
}

console.log(duplicates([2, 4, 6, 8, 4, 3, 2, 1, 4, 6, 0, 9, 1, 3]))