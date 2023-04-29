/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let slow = head
    if(!head || !head.next) return false
    let fast = head.next
    while(fast && fast.next) {
        if(slow === fast) return true
        slow = slow.next
        fast = fast.next.next
    }
    return false
    
//     let [ slow, fast ] = [ head, head];

//     while (fast && fast.next) {/* Time O(N) */
//         slow = slow.next;
//         fast = fast.next.next;

//         const hasCycle = slow === fast;
//         if (hasCycle) return true;
//     }

//     return false;
};



