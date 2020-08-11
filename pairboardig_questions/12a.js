// next_largest
// Given a node in a Binary Search Tree, find the node with the next largest value.
// Assume you don't have the root of the tree, just a single node from it.


function nextLargest(node){
    if (node.right){
        return leftMostNode(node.right)
    }

    while (true) {
        let parentNode = node.parent;
        if (!parentNode) {
            return null;
        } else if (parentNode.left === node) {
            return parentNode;
        } else {
            node = parentNode;
        }
    }
}

function leftMostNode(node) {
    while (node.left) {
        node = node.left
    }
    return node;
}
