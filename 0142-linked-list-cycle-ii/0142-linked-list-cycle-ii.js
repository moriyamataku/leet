/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let fast = head
    let slow = head
    while(fast && fast.next) {
        fast = fast.next.next
        slow = slow.next
        
        if(fast === slow) return findStart(head, fast)
    }
    return null;
};
    
    
var findStart = function(head, matched) {
    let slow = matched.next
    while(true) {
        let fast = head
        while(true) {
            // console.log(matched.val, slow.val, fast.val)
            if(slow === fast) return slow
            if(fast === matched) break;
            fast = fast.next
        }
        slow = slow.next
    }
}