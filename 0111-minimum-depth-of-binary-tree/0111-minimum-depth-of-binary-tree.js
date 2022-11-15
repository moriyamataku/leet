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
 * @return {number}
 */
var minDepth = function(root) {
    if(!root) return 0
    let stack = [root]
    let nextStack = []
    let depth = 0;
    while(stack.length !== 0) {
        depth++;
        nextStack = []
        for(let i = 0; i < stack.length; i++) {
            const node = stack[i]
            if(!node.left && !node.right) return depth
            if(node.left) nextStack.push(node.left)
            if(node.right) nextStack.push(node.right)
        }
        
        stack = nextStack
    }
    return depth;
};