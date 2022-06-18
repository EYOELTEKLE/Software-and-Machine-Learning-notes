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
var isPalindrome = function(head) 
{
    let temp = head;
    let stack1= [];
    let stack2 = [];
    while(temp != null)
    {
        stack1.push(temp.val);
        temp = temp.next;
    }
    const reverse = (head) => 
    {
        let temp = head;
        let next = null;
        let prev = null;
        while(temp != null)
        {
            next = temp.next;
            temp.next = prev;
            prev = temp;
            temp = next;
        }
    return prev;
    }
let list2 = reverse(head);
while(list2 != null)
{
   stack2.push(list2.val);
   list2 = list2.next; 
}
return stack1.join('') === stack2.join('') ? true : false;
};