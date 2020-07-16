// fast_intersection
// Given arr1 and arr2, find the intersection of both sets. It should be trivial 
// to write an O(n**2) solution. Use sorting to solve in O(nlog(n)). Next, improve 
// this to O(n) time (maybe use a non-array datastructure).

//O(n**2) Solution
const fastIntersection = (arr1, arr2) => {
    // let intersection = []
    // for (let i = 0; i < arr1.length; i++) {
    //     for (let j = 0; j < arr2.length; j++) {
    //         if (arr1[i] === arr2[j] && intersection.indexOf(arr1[i]) === -1) intersection.push(arr1[i])
    //     }
    // }
    // return intersection;

    return arr1
        .filter((el, idx, self) => self.indexOf(el) === idx)
        .filter(el => arr2.includes(el));


}




let arr1 = [7, 1, 5, 2, 7,  3, 6];
let arr2 = [3, 8, 6, 20, 20, 7];


console.log(fastIntersection(arr1, arr2)); // => [ 3, 6, 7 ]