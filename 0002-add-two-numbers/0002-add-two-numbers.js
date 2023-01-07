/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const base = 10;
    let c1 = l1;
    let c2 = l2;
    let first = null;
    let last = null;
    let add = 0;
    
    while(c1 || c2 || add !== 0) {
        // console.log(c1,c2)
        const v1 = c1 ? c1.val : 0;
        const v2 = c2 ? c2.val : 0;
        const val = ((v1 + v2 + add) % base);
        add = parseInt((v1 + v2 + add) / base);
        
        const node = new ListNode(val, null);
        if(last) last.next = node;
        if(!first) first = node;
        last = node;
        
        c1 = c1 ? c1.next : null;
        c2 = c2 ? c2.next : null;
    }
    return first;
};


