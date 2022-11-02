class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }


  function closestBst(tree, target) {
    let currentNode = tree;
    let closestValue = Infinity;

    while(true) {
        if(Math.abs(currentNode.value - target) < Math.abs(closestValue - target)) {
            closestValue = currentNode.value;
        }

        if(target > currentNode.value) {
            currentNode = currentNode.right;
        }else if (target < currentNode.value) {
            currentNode = currentNode.left;
        }else {
            return closestValue
        }
    }
  }