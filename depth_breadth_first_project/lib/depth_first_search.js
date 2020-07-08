const { TreeNode } = require('./tree_node');

//Call Stack implementation - Recursive
// function depthFirstSearch(root, targetVal) { 
//     if (!root) return null;
//     if (root.val === targetVal) return root;
//     return  depthFirstSearch(root.left, targetVal) || depthFirstSearch(root.right, targetVal)
// }

//LIFO implementation
function depthFirstSearch(root, targetVal) {
    debugger
    let stack = []
    stack.push(root)
    while (stack.length) {
        let node = stack.pop()
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