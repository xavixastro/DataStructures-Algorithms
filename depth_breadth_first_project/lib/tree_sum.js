function treeSum(root) {
    if (!root) return 0;

    //BF
    // let queue = [root];
    // let sum = 0;
    // while (queue.length) {
    //     let node = queue.shift();
    //     sum += node.val;
    //     if (node.left) queue.push(node.left);
    //     if (node.right) queue.push(node.right);
    // }
    // return sum;

    //DF - iterative
    // let stack = [root];
    // let sum = 0;
    // while (stack.length) {
    //     let node = stack.pop();
    //     sum += node.val;
    //     if (node.right) stack.push(node.right);
    //     if (node.left) stack.push(node.left);
    // }
    // return sum;

    //DF - recursive
    return root.val + treeSum(root.left) + treeSum(root.right);


}


module.exports = {
    treeSum
};