/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    
    const last = reverse(head)
    if(n === 1) {
        return reverse(last.next)
    }
    let current = last
    let count = 1
    while(current.next) {
        const next = current.next
        if(count === n - 1) {
            current.next = next.next
            break;
        }
        current = current.next
        count++
    }
    return reverse(last)
};

var reverse = function(head) {
    
    let current = head
    let last = null
    while(current) {
        const next = current.next
        current.next = last
        last = current
        current = next
    }
    return last
}