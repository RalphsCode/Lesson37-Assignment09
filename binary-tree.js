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
   * the length of the longest path from the root to a leaf. 
   * I'm solving this with a Depth First approach. */

  maxDepth() {
    if (!this.root) return 0;

    // Start a stack with the root node, and depth of 1
    let stack = [[this.root, 1]];
    let maxDepth = 0;

    // Loop through all the nodes in the tree
    while (stack.length > 0) {
        // Take the first node in the stack
        let [current, depth] = stack.pop();
        // If a node was found
        if (current) {
          // Check the current depth and update maxDepth as necessary
            maxDepth = Math.max(maxDepth, depth); 
            // If there are children add to the stack array, and increment the depth
            if (current.left) stack.push([current.left, depth + 1]); 
            if (current.right) stack.push([current.right, depth + 1]); 
        }
    }
    console.log("maxDepth:", maxDepth);
    return maxDepth;
    }  // END maxDepth()

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    if (!this.root) return 0;
    
    let maxSum = -Infinity;
    // Stack will store node, parentSum, isProcessed tuples
    const stack = [[this.root, 0, false]];
    // Map to store max sum endng at each node
    const nodeMaxSums = new Map();
    
    while (stack.length > 0) {
        let [node, parentSum, isProcessed] = stack.pop();
        // Check if there is a node to process
        if (!node);
        // Process the node
        if (!isProcessed) {
            // First visit: add node back to stack as processed
            stack.push([node, parentSum, true]);
            
            // Add left and/or right children to stack (as unprocessed)
            if (node.right) stack.push([node.right, 0, false]);
            if (node.left) stack.push([node.left, 0, false]);
        } else {
            // Get max contributions from the children
            const leftMaxSum = nodeMaxSums.get(node.left) || 0;
            const rightMaxSum = nodeMaxSums.get(node.right) || 0;
            
            // Calculate max sum ending at current node
            const maxEndingHere = Math.max(
                node.val,
                node.val + Math.max(leftMaxSum, rightMaxSum)
            );
            
            // Update global max sum considering all possible paths through current node
            maxSum = Math.max(
                maxSum,
                maxEndingHere,
                node.val + leftMaxSum + rightMaxSum
            );
            
            // Store max sum ending at this node
            nodeMaxSums.set(node, maxEndingHere);
        } // END IF... ELSE
    }  // END While loop...
    
    console.log("maxSum:", maxSum);
    return maxSum;
  }  // END maxSum()

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. 
   * I use the Breadth First approach, and return the next larger value. */

  nextLarger(lowerBound) {
      if (!this.root) return null;

      let toVisitQueue = [this.root];
      let closest = null;
  
      while (toVisitQueue.length) {
        // Remove from the beginning of array - FIFO
        let current = toVisitQueue.shift();		
        if (current.val > lowerBound) {
          /** Check if the current node value is less than/closer to
          * the value that was the closest to the passed in argument. */ 
          if (closest === null || current.val < closest) {
            closest = current.val;
          }  // END if...
          }
  
        if (current.left){ toVisitQueue.push(current.left)};
        if (current.right){ toVisitQueue.push(current.right)};
      }  // END while loop...

      // return closest which will be null or the closest node value
      return closest;;
  }  // END nextLarger()

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
bTree.maxDepth();
bTree.maxSum();
bTree.nextLarger(4);

// END Testing ////////////////////

module.exports = { BinaryTree, BinaryTreeNode };
