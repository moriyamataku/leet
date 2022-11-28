/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    if(!head) return head
    let first = null
    let last = null
    let current = head
    let tail = null
    
    while(current && current.next) {
        tail = current
        const next = current.next.next
        if(first === null) first = current.next
        if(last !== null) last.next = current.next
        last = current.next
        // console.log(current, first, last, next)
        current.next = next
        current = next
        if(current) tail = current
    }
    // console.log(head, first, current, last ,tail)
    if(last) last.next = null
    if(tail) tail.next = first
    return head
};