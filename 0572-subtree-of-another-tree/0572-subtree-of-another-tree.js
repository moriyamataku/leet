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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    if(isSame(root, subRoot)) return true
    // if(root === subRoot) return true
    if(!root) return false
    
    // console.log(root, subRoot)
    if(isSubtree(root.left, subRoot)) return true
    if(isSubtree(root.right, subRoot)) return true
    
    return false
};

var isSame = function(root, sub) {
    if(!root && !sub) return true
    if(root && !sub || !root && sub) return false
    if(root.val !== sub.val) return false
    
    if(!isSame(root.left, sub.left)) return false
    if(!isSame(root.right, sub.right)) return false
    
    return true
}