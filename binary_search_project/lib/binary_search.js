function binarySearch(array, target) { //[2, 3, 6, 8, 12], 8
    if (!array.length) return false;
    let mid = Math.floor(array.length / 2)
    if (array[mid] === target) return true; 
    if (array[mid] > target) {
      return binarySearch(array.slice(0, mid), target);
    } else {
      return binarySearch(array.slice(mid + 1), target);
    }
}

function binarySearchIndex(array, target) {

}


module.exports = {
    binarySearch,
    binarySearchIndex
};