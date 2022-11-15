/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if(!root) return root
    
    let stack = [root]
    let nextStack = []
    while(stack.length !== 0) {
        nextStack = []
        for(let i = 0; i < stack.length; i++) {
            const node = stack[i]
            const next = (i + 1 < stack.length) ? stack[i + 1] : null
            node.next = next
            if(node.left) nextStack.push(node.left)
            if(node.right) nextStack.push(node.right)
        }
        stack = nextStack
    }
    return root
};