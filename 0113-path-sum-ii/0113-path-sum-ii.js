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
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    const result = []
    find(root, targetSum, [], result)
    return result
};

var find = function(node, targetSum, path, result) {
    if(!node) return
    
    if(node.left) {
        find(node.left, targetSum, path.concat(node.val), result)
    }
    if(node.right) {
        find(node.right, targetSum, path.concat(node.val), result)
    }
    
    if(!node.left && !node.right) {
        const vals = path.concat(node.val)
        if(vals.reduce((p, c) => p + c, 0) === targetSum) {
            result.push(vals)
        }
    }
}