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
            
            }
        else
        {
            let i = 0;
           
            while(i != index - 1)
            {
                temp = temp.next;
                i++;
            }
            temp.next = temp.next.next;
            
        }
        this.length--;
        
    }
		
}
/***
check if index length is not greater than linkedList length
move the pointer till we reach the desired index(at index - 1)

if so,
make the new pointer point to the next next pointer

if the list length is 1 just delete the headNode




***/