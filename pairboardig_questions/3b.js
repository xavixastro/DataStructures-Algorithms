// folding_cipher
// Implement the Folding Cipher. It folds the alphabet in half and uses the 
// adjacent letter. Ie. a <=> z, b <=> y, c <=> x, m <=> n.


const foldingCipher = str => {
    let alpha = 'abcdefghijklmnopqrstuvwxyz';
    let newStr = '';
    [...str].forEach(ch => {
        let idx = alpha.indexOf(ch);
        newStr += alpha[alpha.length - 1 - idx];
    })
    return newStr;
}

console.log(foldingCipher('a'));
console.log(foldingCipher('b'));
console.log(foldingCipher('c'));
console.log(foldingCipher('m'));
console.log(foldingCipher('abm'));