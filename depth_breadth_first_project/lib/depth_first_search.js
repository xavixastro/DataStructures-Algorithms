const { TreeNode } = require('./tree_node');


function depthFirstSearch(root, targetVal) { 
    if (!root) return null;
    if (root.val === targetVal) return root;
    return  depthFirstSearch(root.left, targetVal) || depthFirstSearch(root.right, targetVal)
}

let a = new TreeNode('a');
let b = new TreeNode('b');
let c = new TreeNode('c');
let d = new TreeNode('d');
let e = new TreeNode('e');
let f = new TreeNode('f');
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

depthFirstSearch(a, 'e')

//           a
//          / \
//         b   c
//        / \   \
//       d   e   f

// expect(depthFirstSearch(a, 'e')).to.equal(e);


module.exports = {
    depthFirstSearch
};