const getMaxDigits = nums => {
    if (!nums.length) return 0;
    return nums.reduce((acc, el) => {
        return acc.toString().length > el.toString().length ? acc : el
    }).toString().length
}

const getDigitFrom = (num, pos) => {
    return Math.floor(num / (10 ** (pos - 1))) % 10
}

function radixSort(arr) {
    debugger
    if (!Array.isArray(arr)) return null;
    let maxDigits = getMaxDigits(arr);
    for (let i = 1; i <= maxDigits; i++) {
        let buckets = Array(10).fill().map(() => Array());
        arr.forEach( el => {
            buckets[getDigitFrom(el, i)].push(el)
        })

    }
    return arr;
}

radixSort([387, 45])

module.exports = {
    radixSort
};