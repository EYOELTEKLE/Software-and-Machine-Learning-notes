/**
Min priority Queue
Time Complexity - O(logn) - (enqueue,dequeue)
Space Complexity - O(1) - (dequeue,enqueue)
**/
class Node
{
    constructor(value,priority)
    {
        this.value = value;
        this.priority = priority;
    }
    
}
class PriorityQueue
{
    constructor()
    {
        this.heap = [];
    }
    enqueue(val,priority)
    {
        let node = new Node(val,priority);
        this.heap.push(node);
        this.bubbleUp();
    }
    bubbleUp()
    {
        let idx = this.heap.length - 1;
        const current = this.heap[idx];
        while(idx > 0)
        {
            let parentIdx = Math.floor((idx - 1)/2);
            let parent = this.heap[parentIdx];

            if(current.priority >= parent.priority) break;
            this.heap[idx] = parent;
            this.heap[parentIdx] = current;
            idx = parentIdx;
          
            
        }
    }
       dequeue()
    {
           const min = this.heap[0];
           const last = this.heap.pop();
        if(this.heap.length > 0)
        {
            this.heap[0] = last;
            this.bubbleDown();
        }
        return min;
        
    }
    bubbleDown()
    {
        let idx = 0;
        let length = this.heap.length;
        let current = this.heap[0];
        while(true)
        {
                let leftIdx = 2*idx + 1;
                let rightIdx = 2*idx + 2;
                let rightChild,leftChild;
                let smallest = null;

                if(leftIdx < length)
                {
                    leftChild = this.heap[leftIdx];
                    if(leftChild.priority < current.priority)
                    {
                        smallest = leftIdx;
                    }
                }    
                if(rightIdx < length)
                {
                        rightChild = this.heap[rightIdx];
                if((smallest == null && rightChild.priority < current.priority) || (smallest != null && rightChild.priority < leftChild.priority))
                        {
                           smallest =  rightIdx;
                        } 
                }
            if(smallest === null) break;
            this.heap[idx] = this.heap[smallest];
            this.heap[smallest] = current;
            idx = smallest;
        }
        
    }
}
