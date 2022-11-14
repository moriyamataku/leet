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
var levelOrderBottom = function(root) {
    if(!root) return []
    return traversal([root])
};

var traversal = function(stack) {
    // console.log(stack)
    const values = []
    const nextStack = []
    for(let i = 0; i < stack.length; i++) {
        values.push(stack[i].val)
        if(stack[i].left) nextStack.push(stack[i].left)
        if(stack[i].right) nextStack.push(stack[i].right)
    }
    // console.log(values, nextStack)
    
    let result = []
    if(nextStack.length !== 0) {
        result = traversal(nextStack)
    }
    result.push(values)
    return result
}