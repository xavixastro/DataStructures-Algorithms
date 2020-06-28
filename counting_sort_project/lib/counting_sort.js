function countingSort(arr, max) {
    let counter = Array(max+1).fill(0);
    arr.forEach(el => counter[el]++)
    let sortedArr = [];
    for (let i = 0; i <= counter.length; i++) {
        while (counter[i] > 0) {
            sortedArr.push(i);
            counter[i]--;
        }
    }
    return sortedArr;
}


module.exports = {
    countingSort
};