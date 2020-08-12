// is_bst ?
// Given a binary tree, write a function to check whether it’s a binary search tree or not.


function isBst(node, min = null, max = null){
    if (node.null) return true;

    if ((min && (min > node.value)) || (max && (max < node.value))) return false

    return isBst(node.left, min, node.value) && isBst(node.right, node.value, max);

}

// findCommonAncestor
// Find the lowest common ancestor of two nodes in a binary search tree.
// Write the function in JS.Assume I give you both the root and the two nodes.

function findCommonAncestor(root, nodeA, nodeB){

}