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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) return [];
    const ret = []
    traversal([root], ret)
    return ret;
};

var traversal = function(stack, result) {
    const nextStack = []
    const vals = []
    stack.forEach(node => {
        vals.push(node.val)
        if(node.left) nextStack.push(node.left)
        if(node.right) nextStack.push(node.right)
    })
    result.push(vals)
    if(nextStack.length !== 0) traversal(nextStack, result)
}