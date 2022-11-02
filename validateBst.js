class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function validateBst(tree) {
    // Write your code here.
    const minInfinity = -Infinity;
    const maxInfinity = Infinity;
    return validateBstHelper(tree, minInfinity, maxInfinity )
    
  }
  
  function validateBstHelper(tree, min, max) {
    if(tree === null) {
      return true;
    }
    if(tree.value < min || tree.value >= max) {
      return false;
    }
    const validateLeft = validateBstHelper(tree.left, min, tree.value)
    const validateRight = validateBstHelper(tree.right, tree.value, max)
  
    return validateLeft && validateRight
  }