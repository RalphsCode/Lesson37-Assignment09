/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    
    let count = 0;
    if (this.root){
      // Do a Breadth test
      const toVisitQueue = [{current: this.root, count: count + 1 }];
        while (toVisitQueue.length > 0){
          const {current, count} = toVisitQueue.shift();
          if (!current.left && !current.right){
            console.log("minDepth count:", count)
            return count;
          } else {
            if (current.left){ toVisitQueue.push({current: current.left, count: count + 1})};
            if (current.right){ toVisitQueue.push({current: current.right, count: count + 1})};
          }
        }  // END While loop 
      }  // END if...
    return count;
  } // END minDepth()



  

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {

  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {

  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {

  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}

//  Testing ///////////////////////

const node4 = new BinaryTreeNode(4);
const node5 = new BinaryTreeNode(5);
const node6 = new BinaryTreeNode(6);
const node3 = new BinaryTreeNode(3, null, node6);
const node2 = new BinaryTreeNode(2, node4, node5 );
const node1 = new BinaryTreeNode(1, node2, node3);

const bTree = new BinaryTree(node1);

bTree.minDepth();

// END Testing ////////////////////

module.exports = { BinaryTree, BinaryTreeNode };
