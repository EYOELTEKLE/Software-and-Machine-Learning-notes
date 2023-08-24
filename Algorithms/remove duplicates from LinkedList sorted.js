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
         this.next = null
     }
 }
 class LL
 {
     constructor()
     {
         this.head = null;
         this.tail = null;
     }
     //insert at tail
     insert(val)
     {
         const node = new Node(val)
         if(!(this.head))
         {  
             this.head = node;
             this.tail = node
             return;
         }
         this.tail.next = node
         this.tail = node;
     }
 }
var deleteDuplicates = function(head) {
  const hash = new Set();
 const list = new LL();
  while(head)
  {
      if(!(hash.has(head.val)))
      {  
          list.insert(head.val)
      }
      hash.add(head.val)
      head = head.next;
  }
  return list.head;
};
