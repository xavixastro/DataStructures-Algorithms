// View the full problem and run the test cases at:
//  https://leetcode.com/problems/balanced-binary-tree/

function findHeight(root) {
    if (!root) return -1;
    return 1 + Math.max(findHeight(root.left), findHeight(root.right));
}

function isBalanced(root) {

    return findHeight(root.left === root.right)

}