# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Node:
    def __init__(self,val):
        self.val = val
        self.next = None
class LL:
    def __init__(self):
        self.head = None
        self.tail = None
    def insert(self,val):
        node = Node(val)
        if not self.head:
            self.head,self.tail = node,node
            return
        self.tail.next = node
        self.tail = node
        return
class Solution:
    def removeElements(self, head: Optional[ListNode], val: int) -> Optional[ListNode]:
        list = LL()
        while(head):
            if head.val != val:
                list.insert(head.val)
            head = head.next
        return list.head
