To make use of pointers in javascript , we can make use of objects and arrays. To reference each nodes we can nest objects that lets us create the Link Structures.

class LinkedList
{
		constructor(value)
		{
			 this.head = {
			value:value,
			next:null
			}
			this.tail = this.head;
			this.length = 1;
		}
		append(value)
		{
			const newNode = 
			{
				value:value,
				next:null
			}
			this.tail.next = newNode;
			this.tail = newNode;
			this.length++;
		}
		prepend(value)
		{
			const newNode = 
			{
				value:value,
				next:null
			}
			newNode.next = this.head;
			this.head = newNode;
			this.length++;
		}
		
}
/***
code explanation(append)
to optimize insertion at the last Node we have used a tail pointer for the constructor class
to append  a node at z last item we use the tail pointer

 (List1) (List2)
[◫] -> [◫] <- [◫]  (tail pointer)
 ^
  |
[◫] (head pointer)    [◫] (New Node)

- set the next tail pointer point to the NewNode
- make the whole tail pointer point to NewNode again!!


code explanation(prepend)
Insertion at the first node of the LL

 (List1) (List2)
[◫] -> [◫] <- [◫]  (tail pointer)
 ^
  |
[◫] (head pointer)    [◫] (New Node)

- make the next NewNode pointer point to HeadNode
- make HeadNode point to NewNode!!!





***/