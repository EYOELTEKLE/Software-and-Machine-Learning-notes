class maxHeap
{
    constructor(array)
    {
        this.heap=[];
        this.heapify(array);
        
    }
    heapify(l)
    {
    let length = l.length;
    let last = Math.floor(length/2) -1;
    for (let i = last; i >= 0;i--)
    {
        this.bubbleDown(l,i);
    }
    this.heap = l;
    return this;
        
    }
    bubbleDown(l,i)
    {
        let length = l.length;
        let current = l[i];
        while(true)
        {
         let leftIdx = 2*i + 1;
         let rightIdx = 2*i + 2;
         let leftChild,rightChild;
         let largest = null;
         if(leftIdx < length)
         {
             leftChild = l[leftIdx];
             if(leftChild > current)
             {
                 largest = leftIdx;
             }
         }
        if(rightIdx < length)
        {
            rightChild = l[rightIdx];
            if((largest == null && rightChild > current) || (largest != null && rightChild > leftChild))
               {
                largest = rightIdx;
               }
        }

        if(!largest) break;
        l[i] = l[largest];
        l[largest] = current;
        i = largest;
            
            
        }
    }
    insert(val)
    {
        this.heap.push(val);
        this.bubbleUp();
        return this;
    }
    peek()
    {
        return this.heap[0];
    }
    extractMax()
    {
        let max = this.heap[0];
        let last = this.heap.pop();
        if(this.heap.length > 0)
        {
            this.heap[0] = last;
            this.bubbleDown(this.heap,0);
        }
        return max;
    }
    bubbleUp()
    {
        let idx = this.heap.length - 1;
        const val = this.heap[idx];
        while (idx > 0)
        {
            let parentIdx = Math.floor((idx-1)/2);
            let parentVal = this.heap[parentIdx];
            if(val <= parentVal) break;
            this.heap[idx] = parentVal;
            this.heap[parentIdx] = val;
            idx = parentIdx;
        }
    }
}
