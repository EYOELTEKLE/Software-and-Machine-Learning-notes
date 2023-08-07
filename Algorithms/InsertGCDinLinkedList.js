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
class Node
{
    constructor(val)
    {
        this.val = val;
        this.next = null;
    }
}
var insertGreatestCommonDivisors = function(head) {
    let original = head;
    while(head)
    {
        if(!head.next)break;
        let curr = head.val;
        let ahead =head.next.val;
        let mem = head.next;
        let answer = gcd(curr,ahead);
        let node = new Node(answer);
        head.next = node;
        node.next = mem;
        head = node.next
    }
    return original;
};

function gcd(a,b)
{
    // Find Minimum of a and b
    let result = Math.min(a, b);
    while (result > 0) {
        if (a % result == 0 && b % result == 0) {
            break;
        }
        result--;
    }
     
    // Return gcd of a and b
    return result;
}
