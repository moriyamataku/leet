/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    const r = {}
    r[root.val] = null
    const hash = [r]
    let stack = [root]
    while(stack.length !== 0) {
        const h = {}
        const nextStack = []
        stack.forEach(s => {
            if(s.left) {
                h[s.left.val] = s
                nextStack.push(s.left)
            }
            if(s.right) {
                h[s.right.val] = s
                nextStack.push(s.right)
            }
        })
        hash.push(h)
        stack = nextStack
    }
    
    let pa = p
    let qa = q
    // console.log(pa, qa, hash)
    while(pa !== qa) {
        let changed = false
        for(let i = hash.length - 1; i >= 0; i--) {
            // console.log(pa, qa, i)
            const h = hash[i]
            if(h[pa.val]) {
                pa = h[pa.val]
                changed = true
            }
            if(h[qa.val]) {
                qa = h[qa.val]
                changed = true
            }
            if(changed) break;
        }
        // console.log(pa, qa)
    }
    // console.log(pa)
    return pa
};