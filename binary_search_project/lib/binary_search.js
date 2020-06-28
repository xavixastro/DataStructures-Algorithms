function binarySearch(array, target) { 
    if (!array.length) return false;
    let mid = Math.floor(array.length / 2)
    if (array[mid] === target) return true; 
    if (array[mid] > target) {
      return binarySearch(array.slice(0, mid), target);
    } else {
      return binarySearch(array.slice(mid + 1), target);
    }
}

function binarySearchIndex(array, target) { //[2,4,6,7,9], 9
    if (!array.length) return -1;
    let mid = Math.floor(array.length / 2);
    if (array[mid] === target) return mid;
    if (array[mid] > target) {
      return binarySearchIndex(array.slice(0, mid), target);
    } else {
      let result = binarySearchIndex(array.slice(mid + 1), target);
      return result === -1 ? -1 : mid + 1 + result;
    }
}


module.exports = {
    binarySearch,
    binarySearchIndex
};