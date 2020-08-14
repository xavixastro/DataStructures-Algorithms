// Word Chains
// Given a source word, target word and an English dictionary, transform the source 
// word to target by changing / adding / removing 1 character at a time, while all 
// intermediate words being valid English words.Return the transformation chain which 
// has the smallest number of intermediate words.


//********NOT COMPLETED*************//

function wordChains(source, target, dictionary) {
    let alpha = 'abcdefghijklmnopqrstuvwxyz';
    let adjacent = [];
    for (let i = 0; i < source.length; i++){
        for (let j = 0; j < alpha.length; j++) {
            if (source[i] === alpha[j]) continue;
            let newWord = source;
            newWord[i] = alpha[j]
            if (dictionary.includes(newWord)) adjacent.push(newWord)
            if (target === newWord) return adjacent; 
        }
    }
    return adjacent;
}

