function depthFirstSearch(root, targetVal) {
    if (!root) return null;
    if (root.value === targetVal) {
        return root; }
    else {
        return depthFirstSearch(root.left) || depthFirstSearch(root.rigth)
    }
}


module.exports = {
    depthFirstSearch
};