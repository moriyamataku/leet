/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 */
var BSTIterator = function(root) {
    this.values = []
    setBST(root, this.values)
    this.index = -1
    return null
};

var setBST = function(node, values) {
    if(node.left) {
        setBST(node.left, values)
    }
    values.push(node.val)
    if(node.right) {
        setBST(node.right, values)
    }
}

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    this.index++;
    return this.values[this.index]
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    return this.values.length - this.index > 1
};

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */