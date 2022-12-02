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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    return dfs(root, [], k)
};

var dfs = function(node, results, k) {
    if(node.left) {
        const ret = dfs(node.left, results, k);
        if(ret !== -1) return ret
    }
    
    if(results.length === k - 1) return node.val
    results.push(node.val)
    
    if(node.right) {
        const ret = dfs(node.right, results, k);
        if(ret !== -1) return ret
    }
    return -1
}