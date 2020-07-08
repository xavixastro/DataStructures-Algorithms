function treeHeight(root) {
    if (!root) return -1;
    if (!root.left && !root.right) return 0;
    if (treeHeight(root.left) > treeHeight(root.right)){
        return 1 + treeHeight(root.left);
    } else {
        return 1 + treeHeight(root.right);
    }
}


module.exports = {
    treeHeight
};