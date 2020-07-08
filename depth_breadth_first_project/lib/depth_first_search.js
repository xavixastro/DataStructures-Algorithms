function depthFirstSearch(root, targetVal) { //a, 'e'//b, 'e'//d, 'e'
    // if (!root) return null;
    // if (root.value === targetVal) {
    //     return root; }
    // else {
    //     if (root.left) depthFirstSearch(root.left, targetVal)
    //     if (root.right) depthFirstSearch(root.rigth, targetVal)
    //     return null;
    // }
    let stack = [root];

    while (stack.length) {
        let node = stack.pop();

        if (node.val === targetVal) return node;

        if (node.right) stack.push(node.right);
        if (node.left) stack.push(node.left);
    }

    return null;
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