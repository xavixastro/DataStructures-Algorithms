function quickSort(array) {
    if (array.length <= 1) return array;
    let pivot = array.shift();
    let left = [];
    let right = [];
    array.forEach(el => {
        if (el > pivot) {
            right.push(el);
        } else {
            left.push(el);
        }
    })
    return [...quickSort(left), pivot, ...quickSort(right)]
}


module.exports = {
    quickSort
};