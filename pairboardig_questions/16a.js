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


// choose_a_record(also LeanData)
// Write a method that takes a hash of symbol keys, for which the values are integers 
// representing each key's weight. The method returns a key such that the chances of 
// selecting a particular key are weighted by that key's value.

// For the hash {: a => 1, : b => 2, : c => 3 }, the chance of 
// returning: c is 1 / 2, : b is 1 / 3, and : a is 1 / 6.


function chooseARecord(hash){
    let total = Object.values(hash).reduce((acc, el) => acc + el);
    let rand = Math.random();
    let lowBound = 0;
    let highBound = 0;
    for (let [k, v] of Object.entries(hash)) {
        highBound = highBound += (v / total);
        if (rand > lowBound && rand < highBound) return k;
        lowBound = highBound;
    }
}

console.log(chooseARecord({a: 1, b: 2, c: 3 }))