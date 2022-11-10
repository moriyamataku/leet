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
var rotateRight = function(head, k) {
    if(!head || k < 1) return head
    let count = 1
    const tail = reverse(head)
    // console.log(head, tail)
    let current = tail
    let previous = null
    while(current) {
        if(count === k) break;
        previous = current
        current = current.next || tail
        count++;
    } 
    // console.log(current, previous)
    const next = current.next
    current.next = null
    if(head !== tail && next !== null) head.next = tail
    return (next !== null) ? reverse(next) : reverse(tail)
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
    return previous
}
