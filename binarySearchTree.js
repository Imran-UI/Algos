class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insert(value) {
        let currentNode = this;
        while(true) {
            if(value < currentNode.value) {
                if(currentNode.left === null) {
                    currentNode.left = new BST(value);
                    break;
                }else {
                    currentNode = currentNode.left;
                }
            }else {
                if(currentNode.right === null) {
                    currentNode.right = new BST(value);
                    break;
                }else {
                    currentNode = currentNode.right;
                }
            }
        }
        return this;
    }

    contains(value) {
        let currentNode = this;
        while(currentNode !== null) {
            if(value < currentNode.value ) {
                currentNode = currentNode.left;
            }else if(value > currentNode.value) {
                currentNode = currentNode.right;
            }else { // value is same as currentNode value, so we have found it 
                return true;
            }
        }
        return false;
    }

    removeMinNode(parentNode, rightNode) {
        while(rightNode.left !== null){
            parentNode = rightNode;
            rightNode = rightNode.left
        }

        if(parentNode.left === rightNode) {
            parentNode.left = null
        }else {
            parentNode.right = null
        }

        return rightNode.value
    }

    //find and remove 
    remove(value) {
        let currentNode = this;
        let parentNode = null;
        while(currentNode !== null) {
            if(value < currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.left;
            }else if(value > currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.right;
            }else {
                break;
            }
        }
        // once we are out of while loop, we have found the node, we need to remove.

        // there are 4 edge cases for remove.
        //1.leaf node - with no children 
        //2. with both children, left and right 
        //3. with only left child 
        //4. with only right child

        //1.leaf node - with no children 
        if(parentNode !== null && currentNode !== null && currentNode.right === null && currentNode.left === null) {
            if(parentNode.left === currentNode) {
                parentNode.left = null;
            }else {
                parentNode.right = null;
            }
            return this;
        }
        // 2. with both children, left and right 
        if(currentNode !== null && currentNode.right !== null && currentNode.left !== null) {
            const minVal = this.removeMinNode(currentNode, currentNode.right);
            currentNode.value = minVal
            return this;
        }
        //3. with only left child 
        if(currentNode !== null && currentNode.left !== null && currentNode.right === null) {
            let temp = currentNode.left;
            currentNode.value = temp.value;
            currentNode.right = temp.right;
            currentNode.left = temp.left;
            return this;
        }
        //4. with only right child
        if(currentNode !== null && currentNode.left === null && currentNode.right !== null) {
            let temp = currentNode.right;
            currentNode.value = temp.value;
            currentNode.right = temp.right;
            currentNode.left = temp.left;
            return this;
        }

        return this;
    }
}

//            10
//         5      13
//       2   7  11  16    
//         6           17
var tree = new BST(10)
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(2)
tree.insert(16)
tree.insert(7)
tree.insert(6)
tree.insert(17)

console.log(JSON.stringify(tree))

console.log(tree.contains(25))

tree.remove(2) // with no childs
// console.log(JSON.stringify(tree))

tree.remove(5) // with both childs
console.log(JSON.stringify(tree))


