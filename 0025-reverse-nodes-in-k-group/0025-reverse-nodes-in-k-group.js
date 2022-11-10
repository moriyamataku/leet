/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    let cur = head
    let count = 1
    let previous = null
    let leftPrev = null
    let leftNode = null
    let rightNode = null
    while(cur) {
        if(count % k === 1) leftNode = cur
        if(count % k === 0) rightNode = cur
        
        previous = cur
        cur = cur.next
        
        if(leftNode && rightNode) {
            rightNode.next = null
            // console.log(leftNode, rightNode, cur)
            const [h, t] = reverse(leftNode)
            // console.log(h, t, cur)
            if(leftPrev) {
                leftPrev.next = h
            } else {
                head = h
            }
            leftPrev = t
            t.next = cur
            // console.log(h)
            leftNode = null
            rightNode = null
        }
        count++;
    }
    return head
};

var reverse = function(head) {
    let tail = head
    let current = head
    let previous = null
    while(current) {
        const next = current.next
        current.next = previous
        previous = current
        current = next
    }
    return [previous, tail]
}