// is_bst ?
// Given a binary tree, write a function to check whether it’s a binary search tree or not.


function isBst(node, min = null, max = null){
    if (node.null) return true;

    if ((min && (min > node.value)) || (max && (max < node.value))) return false

    return isBst(node.left, min, node.value) && isBst(node.right, node.value, max);

}