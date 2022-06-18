class doublyLinkedList
{
		constructor(value)
		{
			 this.head = {
			value:value,
			next:null,
            prev:null
			}
			this.tail = this.head;
			this.length = 1;

		}
		append(value)
		{
			const newNode = 
			{
				value:value,
				next:null,
                prev:null
			}
            newNode.prev = this.tail;
			this.tail.next = newNode;
			this.tail = newNode;
			this.length++;
		}
		prepend(value)
		{
			const newNode = 
			{
				value:value,
				next:null,
                prev:null
			}
			newNode.next = this.head;
            this.head.prev = newNode;
			this.head = newNode;
            
			this.length++;
		}
    print()
    {
        const arr = [];
        let currentNode = this.head;
        while(currentNode != null)
        {
            arr.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return arr;
    }
        insert(index,value)
    {
        if (index >= this.length)
        {
           return this.append(value);
        }
        if (index == 0)
        {
            return this.prepend(value);
        }
        
        const newNode = 
        {
            value:value,
            next:null,
            prev:null
        }
        let temp = this.head;
        let i = 0;
        while(i != index - 1 )
        {
            
            temp = temp.next;
            i++;
        }
        newNode.prev = temp;
        newNode.next = temp.next;
        temp.next = newNode;
        this.length++;
        
    }
    delete(index)
    {
        let temp  = this.head;
      
         if (index > this.length)
        {
            console.log("Index exceeds the List Length")
        }
        else  if(index == 0)
            {
                this.head = this.head.next;
                this.tail = this.head;
                this.head.prev = null;
            
            }
        else
        {
            let i = 0;
           
            while(i != index - 1)
            {
                temp = temp.next;
                i++;
            }
            const temp2 = temp;
            
            temp.next.next.prev = temp;
            temp.next = temp.next.next;
            
        }
        this.length--;
        
    }
		
}

/***
Very tricky doubly linkedList using javascript
super tricky and ambiguous implementation of doubly linkedList using js
//to append
use the tail pointer to assign previous node's pointer value
// to prepend
make the previous node's pointer point to null or assign it to the new Node since it is pointing to null
// to insert at any position
check if the index position is greater than the target - if true then return an error

check if index is 0 if true use the prepend method
Last condition 
iterate throught till we reach the index target(index - 1)

use newNode.prev to point to temp
//to delete(tricky)
use the temp.next.next.prev to create previous link wiz the current temp




***/