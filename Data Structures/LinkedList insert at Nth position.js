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
            next:null
        }
        let temp = this.head;
        let i = 0;
        while(i != index - 1 )
        {
            
            temp = temp.next;
            i++;
        }
        
        newNode.next = temp.next;
        temp.next = newNode;
        console.log(temp);
        this.length++;
        
    }
		
}
/***
Insertion at nth position of the Node
is a bit tricky
create a temporary pointer that holds headPointer

then traverse till it reaches index(at index - 1)
then we make
newNode.next = temp.next;//Makes the newNode next point to temp's head

temp.next = newNode;
make the current pointer point to the new Node 


***/