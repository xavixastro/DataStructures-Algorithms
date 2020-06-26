function merge(array1, array2) {
    let merged = [];
    while (array1.length && array2.length) {
        if (array1[0] < array2[0]) {
            merged.push(array1.shift())
        } else {
            merged.push(array2.shift())
        }
    }
}

function mergeSort(array) {

}

module.exports = {
    merge,
    mergeSort
};