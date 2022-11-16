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
var sumNumbers = function(root) {
    const numbers = []
    tree(root, [], numbers)
    return numbers.reduce((p, c) => p + c, 0)
};

var tree = function(node, path, numbers) {
    if(!node) return
    
    if(node.left) {
        tree(node.left, path.concat(node.val), numbers)
    }
    if(node.right) {
        tree(node.right, path.concat(node.val), numbers)
    }
    
    if(!node.left && !node.right) {
        const nums = path.concat(node.val)
        const number = nums.reduce((prev, curr, idx) => {
            prev += curr * Math.pow(10, (nums.length - 1 - idx))
            return prev
        }, 0)
        numbers.push(number)
    }
}