// https://msdn.microsoft.com/en-us/library/aa289150(v=vs.71).aspx
/* eslint-disable global-require */
/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
/* eslint-disable class-methods-use-this */
const Queue = require('./queue-helper');

class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  // Wraps the input value in a new BinarySearchTree and
  // assigns it to either the left or right subtree,
  // depending on its value
  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BinarySearchTree(value);
      } else {
        this.left.insert(value);
      }
    } else if (value >= this.value) {
      if (this.right === null) {
        this.right = new BinarySearchTree(value);
      } else {
        this.right.insert(value);
      }
    }
  }

  // Checks the binary search tree for the input target
  // Can be written recursively or iteratively
  contains(target) {
    if (target === this.value) return true;
    if (this.value < target && this.right) return this.right.contains(target);
    if (this.value >= target && this.left) return this.left.contains(target);
    return false;
  }
  // Traverses the tree in a depth-first manner, i.e. from top to bottom
  // Applies the given callback to each tree node in the process
  depthFirstForEach(cb) {
    function depthFirstTraversal(bstNode) {
      cb(bstNode.value);
      if (bstNode.left) {
        depthFirstTraversal(bstNode.left);
      }
      if (bstNode.right) {
        depthFirstTraversal(bstNode.right);
      }
    }
    depthFirstTraversal(this);
  }
  // Traverses the tree in a breadth-first manner, i.e. in layers, starting 
  // at the root node, going down to the root node's children, and iterating
  // through all those nodes first before moving on to the next layer of nodes
  // Applies the given callback to each tree node in the process
  // You'll need the queue-helper file for this. Or could you roll your own queue
  // again. Whatever floats your boat.
  breadthFirstForEach(cb) {
    const queue = new Queue();
    queue.enqueue(this);
    while (!queue.isEmpty()) {
      const bstNode = queue.dequeue();
      cb(bstNode.value);
      if (bstNode.left) {
        queue.enqueue(bstNode.left);
      }
      if (bstNode.right) {
        queue.enqueue(bstNode.right);
      }
    }
  }
}

module.exports = BinarySearchTree;
