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
var diameterOfBinaryTree = function(root) {
    const queue = [root]
    let length = 0
    while(queue !== 0) {
        const node = queue.shift()
        if(!node) break;
        
        length = Math.max(diameter(node), length)
        if(node.left) queue.push(node.left)
        if(node.right) queue.push(node.right)
    }
    return length
};

var diameter = function(node) {
    const left = depth(node.left)
    const right = depth(node.right)
    
    return left + right
}

var depth = function(node) {
    if(!node) return 0
    let stack = [node]
    let depth = 0
    while(stack.length !== 0) {
        depth++;
        const nextStack = []
        stack.forEach(obj => {
            if(obj.left) nextStack.push(obj.left)
            if(obj.right) nextStack.push(obj.right)
        })
        stack = nextStack
    }
    return depth
}