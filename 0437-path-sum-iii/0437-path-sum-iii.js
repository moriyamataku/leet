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
 * @return {number}
 */
var pathSum = function(root, targetSum) {
    if(!root) return 0
    
    // console.log('pathSum', root, targetSum)
    return find(root, targetSum) + pathSum(root.left, targetSum) + pathSum(root.right, targetSum)
};

var find = function(node, targetSum) {
    // console.log('find', node, targetSum)
    
    let matched = 0;
    if(node.left) {
        matched += find(node.left, targetSum - node.val)
    }
    if(node.right) {
        matched += find(node.right, targetSum - node.val)
    }
    
    if(node.val === targetSum) {
        // console.log('matched', vals, node)
        matched += 1
    }
    return matched
}