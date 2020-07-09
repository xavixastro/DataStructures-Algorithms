class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


class BST {//tree
   constructor(){
                  this.root = null; //10-left:5-right:16//
                                    //5-left:null-right:null//
                                    //16-left:null-right:null//
                }

   insert(val, root = this.root){ //(1)
       if (!root){
           this.root = new TreeNode(val)
       } else if (val < root.val){
               if (!root.left) { 
                   root.left = new TreeNode(val)
               } else {
                   this.insert(val, root.left)
               }
        } else {
                if (!root.right) {
                    root.right = new TreeNode(val);
                } else {
                    this.insert(val, root.right);
                }
        }
   }
}

//let tree = new BST();
// tree.insert(10);
// tree.insert(5);
// tree.insert(16);
// tree.insert(1);
// tree.insert(7);
// tree.insert(16);

module.exports = {
    TreeNode,
    BST
};