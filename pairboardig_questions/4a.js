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