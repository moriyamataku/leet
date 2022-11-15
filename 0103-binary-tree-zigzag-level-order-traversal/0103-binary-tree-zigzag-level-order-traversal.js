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
var zigzagLevelOrder = function(root) {
    if(!root) return [];
    const ret = []
    let stack = [root]
    let zigzag = false
    while(stack.length !== 0) {
        const prev = stack.map(node => node.val)
        if(zigzag) prev.reverse()
        ret.push(prev)
        let nextStack = []
        stack.forEach(node => {
            if(node.left) nextStack.push(node.left)
            if(node.right) nextStack.push(node.right)
        });
        stack = nextStack
        zigzag = !zigzag
    }
    return ret;
};