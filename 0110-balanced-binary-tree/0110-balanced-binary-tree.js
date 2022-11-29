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
 * @return {boolean}
 */
var isBalanced = function(root) {
    if(!root) return true
    if(root.left) {
        if(!isBalanced(root.left)) return false
    }
    if(root.right) {
        if(!isBalanced(root.right)) return false
    }
    
    const left = height(root.left)
    const right = height(root.right)
    // console.log(root, left, right)
    if(Math.abs(left - right) > 1) return false
    return true
};

var height = function(root) {
    let queue = root ? [root] : []
    let height = 0
    while(queue.length !== 0) {
        const newQueue = []
        queue.forEach(q => {
            if(q.left) newQueue.push(q.left)
            if(q.right) newQueue.push(q.right)
        })
        
        queue = newQueue
        height++
    }
    return height
}