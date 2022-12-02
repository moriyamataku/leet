/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    const mid = parseInt(nums.length / 2);
    const checked = new Set();
    const head = new TreeNode(nums[mid], null, null);
    checked.add(mid);
    generateBranch(nums, head, mid, 0, nums.length - 1, checked)
    
    return head;
};

var generateBranch = function(nums, root, mid, start, end, checked) {
    const left = Math.floor((start + mid) / 2);
    const right = Math.ceil((mid + end) / 2);
    // console.log(start, left, mid, right, end, checked)
    
    if(!checked.has(left)) {
        const node = new TreeNode(nums[left], null, null);
        checked.add(left)
        root.left = node;
        generateBranch(nums, node, left, start, mid, checked);
    }
    if(!checked.has(right)) {
        const node = new TreeNode(nums[right], null, null);
        checked.add(right)
        root.right = node;
        generateBranch(nums, node, right, mid, end, checked);
    }
}