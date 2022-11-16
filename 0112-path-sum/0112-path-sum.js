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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    return find(root, targetSum)
};

var find = function(node, targetSum, path = []) {
    // console.log(node, targetSum, path)
    if(!node) return false

    if(node.left) {
        if(find(node.left, targetSum, path.concat(node.val))) return true
    }
    if(node.right) {
        if(find(node.right, targetSum, path.concat(node.val))) return true
    }
    
    if(!node.left && !node.right) {
        const sum = path.concat(node.val).reduce((prev, curr) => prev + curr, 0)
        if(targetSum === sum) return true
    }
    return false
}