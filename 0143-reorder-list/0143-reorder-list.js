/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    let slow = head
    let fast = head
    
    while(fast && fast.next) {
        fast = fast.next.next
        slow = slow.next
    }
    fast = reverseList(slow.next)
    slow.next = null
    slow = head
    
    while(fast) {
        const fastNext = fast.next
        const slowNext = slow.next
        slow.next = fast
        fast.next = slowNext
        fast = fastNext
        slow = slowNext
    }
};

var reverseList = function(head) {
    let prev = null
    let next
    let curr = head
    while(curr) {
        next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }
    return prev
}