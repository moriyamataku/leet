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
    if(head === null || head.next === null) return head
    let count = 0
    let cur = head
    let last = null
    let prev = null
    while(cur) {
        count++;
        last = cur
        cur = cur.next
    }
    const rotate = count - (k % count)
    if(rotate === count) return head

    cur = head
    count = 0
    while(count < rotate) {
        prev = cur
        cur = cur.next
        count++;
    }
    prev.next = null
    last.next = head
    return cur
};

