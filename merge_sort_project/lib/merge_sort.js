function merge(array1, array2) {
    let merged = [];
    while (array1.length && array2.length) {
        if (array1[0] < array2[0]) {
            merged.push(array1.shift())
        } else {
            merged.push(array2.shift())
        }
    }
    return [...merged, ...array1, ...array2]
}

function mergeSort(array) { //[1, 2, 3, 4, 5] //[1, 2, 3]
    if (array.length <= 1) return array;
    let mid = Math.floor(array.length / 2)
    let left = array.slice(0, mid); //[1]
    let right = array.slice(mid); //[2, 3]
    return merge(mergeSort(left), mergeSort(right))
}

module.exports = {
    merge,
    mergeSort
};