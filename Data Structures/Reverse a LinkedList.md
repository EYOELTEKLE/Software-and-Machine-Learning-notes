 reverse()
    {
        this.tail = this.head;
        let prev = null;
        let current = this.head;
        let next = null;
        while(current != null)
        {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
            
        }
        this.head = prev;
        
        
    }
**Iterative Method** 

> 1.  Initialize three pointers prev as NULL, curr as head and next as NULL.
> 2.  Iterate through the linked list. In loop, do following.   
>     // Before changing next of current,   
>     // store next node   
>     next = curr->next  
>     // Now change next of current   
>     // This is where actual reversing happens   
>     curr->next = prev   
>     // Move prev and curr one step forward   
>     prev = curr   
>     curr = next

![](https://media.geeksforgeeks.org/wp-content/cdn-uploads/RGIF2.gif)