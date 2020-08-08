// max_unique_psub
// Given a string, find the lexicographically greatest pseudo - substring.

function maxUniquePsub(str){
    if (!str.length) return [''];
    let subs = [];
    let chr = str[0];
    let otherSubs = maxUniquePsub(str.slice(1))
    subs = [...otherSubs];
    otherSubs.forEach(sub => {
        subs.push(chr + sub)
    })
    return subs;
}

console.log(maxUniquePsub('abcdef')) // => 'f'
maxUniquePsub('abcdefedcba') // => 'fedcba'
maxUniquePsub('algorithms') // => 'ts'