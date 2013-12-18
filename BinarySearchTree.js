// binary search tree in JavaScript
// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// The left and right subtree each must also be a binary search tree.
// There must be no duplicate nodes.

//create 'class'
var BST = function() {
    this.root = null;
    this.size = 0;
    this.height = 0;

};

//add new data to tree, where data is in an array
//loop through array checking each side of each node 
BST.prototype.insert = function(data) {

    for (var i = 0; i < data.length; i++) {
        if (this.root === null) {
            this.root = {
                data: data[i],
                left: null,
                right: null
            };
            this.size++;
            this.height++;
        } else {
            temp = this.root;
            var tempHeight = 1;
            while (temp.left || temp.right) {
                if (data[i] > temp.data) {
                    if (temp.right === null) {
                        temp.right = {
                            data: data[i],
                            left: null,
                            right: null
                        };
                        break;
                    } else {
                        temp = temp.right;
                        tempHeight++;
                    }
                } else {
                    if (temp.left === null) {
                        temp.left = {
                            data: data[i],
                            left: null,
                            right: null
                        };
                        break;
                    } else {
                        temp = temp.left;
                        tempHeight++;
                    }
                }

            }
            if (data[i] > temp.data) {
                temp.right = {
                    data: data[i],
                    left: null,
                    right: null
                };
                this.size++;
                if (temp.left === null) {
                    tempHeight++;
                }
            } else {
                temp.left = {
                    data: data[i],
                    left: null,
                    right: null
                };
                this.size++;
                if (temp.right === null) {
                    tempHeight++;
                }
            }
            if (tempHeight > this.height) {
            this.height = tempHeight;
            }
        }
    }
};

//find value in tree
//not finished
BST.prototype.contains = function(searchValue) {
    if (this.root === null) {
        throw new Error("This tree has no root. Nothing to see here.");
    } else {
        temp = this.root;
        //check if new data the same as root, if not work our way through tree
        //checking left and right in turn
        while (temp.data != searchValue) {

            if (!temp.right && !temp.left) {
                    return false;
                }
            if (searchValue < temp.data) {
                temp = temp.left;
            } else {
                temp = temp.right;
            }
        }
        return true;
    }
};


//test
var tree = new BST();
