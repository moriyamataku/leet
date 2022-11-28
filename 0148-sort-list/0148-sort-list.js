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
var sortList = function(head) {
    // console.log("sortList", head)
    if(!head || !head.next) return head
    if(!head.next.next) {
        if(head.val > head.next.val) {
            const next = head.next
            head.next = null
            next.next = head
            return next
        }
        return head
    }
    
    let slow = head
    let fast = head
    let last = null
    while(fast && fast.next) {
        last = slow
        slow = slow.next
        fast = fast.next.next
    }
    last.next = null
    const list1 = sortList(head)
    const list2 = sortList(slow)
    // console.log(head, slow, list1, list2)
    
    return mergeList(list1, list2)
};

var mergeList = function(list1, list2) {
    // console.log('mergeList', list1, list2)
    let head = null
    let last = null
    
    let l1 = list1
    let l2 = list2
    
    while(l1 || l2) {
        let curr = null
        // console.log(l1, l2, last)
        if((l1 && !l2) || ((l1 && l2) && l1.val < l2.val)) {
            curr = l1
            l1 = l1.next
        } else {
            curr = l2
            l2 = l2.next
        }
        curr.next = null
        if(!head) head = curr
        if(last) last.next = curr
        last = curr
    }
    // console.log(head)
    return head
};





