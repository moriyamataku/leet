/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    let cur = head
    let count = 1
    let previous = null
    let leftPrev = null
    let leftNode = null
    let rightNode = null
    while(cur) {
        if(left === count) {
            leftPrev = previous
            leftNode = cur
        }
        if(right === count) rightNode = cur
        
        if(leftNode && rightNode && (leftNode !== rightNode)) {
            const next = rightNode.next
            rightNode.next = null
            const [h, t] = reverse(leftNode)
            if(leftPrev) {
                leftPrev.next = h
            } else {
                head = h
            }
            t.next = next
            break;
        }
        previous = cur
        cur = cur.next
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