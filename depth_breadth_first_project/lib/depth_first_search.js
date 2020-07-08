function depthFirstSearch(root, targetVal) { //a, 'e'//b, 'e'//d, 'e'
    if (!root) return null;
    if (root.value === targetVal) {
        return root; }
    else {
        if (root.left) depthFirstSearch(root.left, targetVal)
        if (root.right) depthFirstSearch(root.rigth, targetVal)
        return null;
    }
}

//           a
//          / \
//         b   c
//        / \   \
//       d   e   f

// expect(depthFirstSearch(a, 'e')).to.equal(e);


module.exports = {
    depthFirstSearch
};