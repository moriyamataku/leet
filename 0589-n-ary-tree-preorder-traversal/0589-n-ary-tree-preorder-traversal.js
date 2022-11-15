/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    const result = []
    deepTraversal(root, result)
    return result
};

var deepTraversal = function(node, result) {
    if(node === null) return
    result.push(node.val)
    node.children.forEach(child => {
        deepTraversal(child, result)
    })
}