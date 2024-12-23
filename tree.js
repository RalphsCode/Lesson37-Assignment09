/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. 
   * Uses a Breath First Search - Queue - FIFO
  */

  sumValues() {
    let count = 0;
      // ensure there is a tree to work with
      if (this.root){
      // Make an array to store nodes to visit
      const toVisitQueue = [this.root];

      while (toVisitQueue.length > 0){
        // Take out the first node in the array
        const current = toVisitQueue.shift();
        // need to determine value, as shift returns a node object
        count += current.val;

        // push all the current node's children into the visit array
        for (let child of current.children) {
          toVisitQueue.push(child);
        }
      }; }
      console.log("Count:", count);
      return count;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    let count = 0;
    // ensure there is a tree to work with
    if (this.root){

      const toVisitQueue = [this.root];

      while (toVisitQueue.length > 0) {
        const current = toVisitQueue.shift();
        if (current.val % 2 === 0){
          count += current.val;
        };
        for (let child of current.children) {
          toVisitQueue.push(child);
        }
      };  // END While loop...
      };  // END If loop...
      
    console.log("Even's Count:", count);
    return count;
    }


  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {

  }
}


// Testing //////////////////////////////////

const root = new TreeNode(5, [
  new TreeNode(3, [new TreeNode(2), new TreeNode(4)]),
  new TreeNode(6),
]);

const tree = new Tree(root);
tree.sumValues();
tree.countEvens();

// END Testing //////////////////////////////////

module.exports = { Tree, TreeNode };
