

//Code
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
     insert(val)
     {
         const node =new Node(val)
         if(!(this.tail))
         {
             this.tail = node;
             this.head = node;
             return
         }
         this.tail.next = node;
         this.tail = node;
     }
 }
var middleNode = function(head) {
    let temp = head;
    let length = 0;
    const getLength = (node) => 
    {
        if(!node)return;
        length+=1
        getLength(node.next)
    }
   getLength(temp)
   let pos;
   let index = 0;
   if(length % 2 ==0 ) pos = length/2;
   else{
       pos = ((length+1)/2 -1)
   }
    const list = new LL();
   while(head)
   {
       if(index>= pos)
       {
           list.insert(head.val)
       }
       index++
       head = head.next;
   }
    return list.head;
};
