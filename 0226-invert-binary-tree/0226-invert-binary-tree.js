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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if(!root) return root

    if(root.left) invertTree(root.left)
    if(root.right) invertTree(root.right)
    
    if(root.left || root.right) {
        const tmp = root.left
        root.left = root.right
        root.right = tmp
    }
    return root
};