// fast_intersection
// Given arr1 and arr2, find the intersection of both sets. It should be trivial 
// to write an O(n**2) solution. Use sorting to solve in O(nlog(n)). Next, improve 
// this to O(n) time (maybe use a non-array datastructure).

//O(n**2) Solution
// const fastIntersection = (arr1, arr2) => {
//     // let intersection = []
//     // for (let i = 0; i < arr1.length; i++) {
//     //     for (let j = 0; j < arr2.length; j++) {
//     //         if (arr1[i] === arr2[j] && intersection.indexOf(arr1[i]) === -1) intersection.push(arr1[i])
//     //     }
//     // }
//     // return intersection;

//     return arr1
//         .filter((el, idx, self) => self.indexOf(el) === idx) 
//         .filter(el => arr2.includes(el)); 

// }



//O(nlog(n)) Solution

const fastIntersection = (arr1, arr2) => {
    debugger
    arr1.sort((a, b) => a - b);
    arr2.sort((a, b) => a - b);
    let id1 = 0;
    let id2 = 0;
    let intersection = [];

    while (id1 < arr1.length && id2 < arr2.length) {
        if (arr1[id1] > arr2[id2]) {
            id2++;
        } else if (arr1[id1] < arr2[id2]) {
            id1++;
        } else {
            intersection.push(arr1[id1]);
            id1++;
            id2++;
        }
    }

    return intersection;
}



let arr1 = [7, 1, 5, 2, 7,  3, 6];
let arr2 = [3, 8, 6, 20, 20, 7];


console.log(fastIntersection(arr1, arr2)); // => [ 3, 6, 7 ]

