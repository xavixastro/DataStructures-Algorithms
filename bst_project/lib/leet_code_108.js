// View the full problem and run the test cases at:
//  https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/

 function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
 }

function sortedArrayToBST(nums) { //[-10,-3,0,5,9] // [-10,-3]
    if (!nums.length) return null;
    if (nums.length === 1) return new TreeNode(nums[0]);
    let midIdx = Math.floor(nums.length / 2);//2 //1
    let root = new TreeNode(nums[midIdx]);
    root.left = sortedArrayToBST(nums.slice(0, midIdx));
    root.right = sortedArrayToBST(nums.slice(midIdx + 1));
    return root;
}

//              0           
//             / \
//           -3   9
//           /   /
//         -10  5