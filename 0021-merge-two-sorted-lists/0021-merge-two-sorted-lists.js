/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let head = null;
    let prev = null;
    let curr = null;
    let l1 = list1;
    let l2 = list2;
    while(l1 || l2) {
        let curr = null
        if((l1 && !l2) || (l1 && l2 && l1.val <= l2.val)) {
            curr = l1
            l1 = l1.next
        } else {
            curr = l2
            l2 = l2.next
        }
        if(!head) head = curr;
        if(prev) prev.next = curr;
        
        prev = curr;
    }
    return head;
};