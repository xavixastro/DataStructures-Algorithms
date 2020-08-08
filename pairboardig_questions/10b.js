// max_unique_psub
// Given a string, find the lexicographically greatest pseudo - substring.

function maxUniquePsub(str){
    let subs = findSubs(str);
    return subs.reduce((acc, ele) => acc > ele ? acc : ele);
}

function findSubs(str) {
    if (!str.length) return [''];
    let subs = [];
    let chr = str[0];
    let otherSubs = findSubs(str.slice(1))
    subs = [...otherSubs];
    otherSubs.forEach(sub => {
        subs.push(chr + sub)
    })
    subs.reduce((acc, ele) => acc > ele ? acc : ele)
    return subs;
}

console.log(maxUniquePsub('abcdef')) // => 'f'
console.log(maxUniquePsub('abcdefedcba')) // => 'fedcba'
console.log(maxUniquePsub('algorithms')) // => 'ts'