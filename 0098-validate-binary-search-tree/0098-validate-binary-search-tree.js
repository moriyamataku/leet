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
 * @return {boolean}
 */
var isValidBST = function(root) {
    return validNode(root);
};

var validNode = function(node, left = [], right = []) {
    if(left.some(l => l >= node.val)) return false
    if(right.some(r => r <= node.val)) return false
    
    if(node.left) {
        if(!validNode(node.left, left, right.concat(node.val))) return false
    }
    if(node.right) {
        if(!validNode(node.right, left.concat(node.val), right)) return false
    }
    return true
}