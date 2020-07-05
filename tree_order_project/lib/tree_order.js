function inOrderArray(root) {
    if (!root) return [];
    return [...inOrderArray(root.left), root.val, ...inOrderArray(root.right)]
}

function postOrderArray(root) {
    if (!root) return [];
    return [...inOrderArray(root.left), ...inOrderArray(root.right), root.val];
}


module.exports = {
    inOrderArray,
    postOrderArray
};