/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let slow = head
    let fast = head
    while( fast && fast.next ) {
        slow = slow.next
        fast = fast.next.next
    }
    
    const last = reverse(slow)
    slow = head
    fast = last 
    while(slow && fast) {
        if(slow.val !== fast.val) return false
        slow = slow.next
        fast = fast.next
    }
    return true
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