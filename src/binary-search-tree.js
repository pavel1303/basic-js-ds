const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(value) {
    this.data = value || null;
    this.left = null;
    this.right = null;
  }


}
class BinarySearchTree {

  constructor() {
    this.rootTree = null;
  }

  root() {
    return this.rootTree;
  }

  add(data) {
    this.rootTree = addNode(this.rootTree, data);

    function addNode(node, data) {
      if (!node) {
        return new Node(data);
      }
      if (node.data === data) {
        return node;
      }
      if (data < node.data) {
        node.left = addNode(node.left, data);
      } else {
        node.right = addNode(node.right, data);
      }
      return node;
    }
  }

  has(data) {
    return hasData(this.rootTree, data);

    function hasData(node, data) {
      if (!node) {
        return false;
      }
      if (node.data === data) {
        return true;
      }
      return node.data > data ? hasData(node.left, data) : hasData(node.right, data);
    }
  }


  find(data) {
    return findData(this.rootTree, data);

    function findData(node, data) {
      if (!node) {
        return null;
      }
      if (node.data === data) {
        return node;
      }
      return node.data > data ? findData(node.left, data) : findData(node.right, data);
    }
  }

  remove(data) {
    this.rootTree = removeNode(this.rootTree, data);

    function removeNode(node, data) {
      if (!node) {
        return null;
      }
      if (node.data > data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }
        let minRight = node.right;
        while (minRight.left) {
          minRight = minRight.left;
        }
        node.data = minRight.data;
        node.right = removeNode(node.right, minRight.data);
        return node;
      }
    }
  }

  min() {
    if (!this.rootTree) {
      return null;
    }
    let curRoot = this.rootTree;
    let min = curRoot.data;
    while (curRoot.left) {
      curRoot = curRoot.left;
      min = curRoot.data;
    }
    return min;
  }

  max() {
    if (!this.rootTree) {
      return null;
    }
    let curRoot = this.rootTree;
    let max = curRoot.data;
    while (curRoot.right) {
      curRoot = curRoot.right;
      max = curRoot.data;
    }
    return max;
  }
}

module.exports = {
  BinarySearchTree
};