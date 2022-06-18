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


LinkedList Modified

class ll
{

    constructor(value)
    {
       this.head = 
       {
           value :value,
           next: null
       } 
    this.length = 1;
    this.tail = this.head;
    }
    insertHead(value) 
    {
      const Node = 
      {
          value:value,
          next:null
      }
        ;
        Node.next = this.head;
        this.head = Node;
        this.length++;
    }
    insertTail(value)
    {
        const Node = 
      {
          value:value,
          next:null
      }
        
        
        this.tail.next = Node;
        this.tail = Node;
        this.length++;
        
        
    }
    insert(value, position)
    {
        const Node = 
      {
          value:value,
          next:null
      }
       let temp = this.head;
        const length = this.print().length;
        if (position >= length)
        {
            console.log("Out of Bound");
            return
        }
        if (position === 0)
        {
            this.insertHead(value);
            return
        }
        if (position === length - 1)
        {
            this.insertTail(value);
            return
        }
        let i = 0;
        while(temp != null)
        {
            if (position - 1 === i)
            {
              Node.next = temp.next;
              temp.next = Node;
            }
            i++;
            temp = temp.next;
        }
        this.length++;
        
    }
    print()
    {
        let arr = [];
        let temp = this.head;
        while(temp != null)
        {
            arr.push(temp.value);
            temp = temp.next
        }
        return arr
    }
}