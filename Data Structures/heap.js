class maxHeap
{
    constructor()
    {
        this.heap = [];
    }
    buildHeap(array)
    {
        let length = array.length;
        let parent = Math.floor(length/2) - 1;
        for (let i = parent; i >= 0; i--)
        {
            this.bubbleDown(array,i);
        }
        this.heap = array;
        return this;
    }
    bubbleDown(array,index)
    {
        const length = array.length;
        let current = array[index];
      

        
        while(true)
        {
    	let leftChildIdx = 2 * index + 1;
        let rightChildIdx = 2 * index + 2;
        let largest = null;
        let leftChild,rightChild;
            if(leftChildIdx < length)
            {
                leftChild = array[leftChildIdx];
                if(leftChild > current)
                {
                    largest = leftChildIdx;
                }  
            }
            if(rightChildIdx < length)
            {
                rightChild = array[rightChildIdx];
                if((rightChild > current) && (largest == null) || (largest != null) && (rightChild > leftChild))
                {
                    largest = rightChildIdx;
                }
            }
            if(largest === null)break;
            array[index] = array[largest];
            array[largest] = current;
            index = largest;
        }
        
    }
    peek()
    {
        return this.heap[0];
    }
    extractMax()
    {
        const maximumValue = this.heap[0];
        const last = this.heap.pop();
        if(this.heap.length > 0)
        {
            this.heap[0] = last;
            this.bubbleDown(this.heap,0);
        }
        return maximumValue;
    }
    insert(value)
    {
        this.heap.push(value);
        this.bubbleUp();
        return this;
    }
    bubbleUp()
    {
        let idx = this.heap.length - 1;
        const value = this.heap[idx];
        while(idx > 0)
        {
            let parent = Math.floor((idx-1)/2);
            let parentVal = this.heap[parent];
            if(value <= parentVal)break;
            this.heap[parent] = value;
            this.heap[idx] = parentVal;
            idx = parent;
        }
    }
    
    
}


class minHeap
{
    constructor()
    {
        this.heap = [];
    }
    buildHeap(array)
    {
        let length = array.length;
        let parent = Math.floor(length/2) - 1;
        for (let i = parent; i >= 0; i--)
        {
            this.bubbleDown(array,i);
        }
        this.heap = array;
        return this;
    }
    bubbleDown(array,index)
    {
        const length = array.length;
        let current = array[index];
      

        
        while(true)
        {
    	let leftChildIdx = 2 * index + 1;
        let rightChildIdx = 2 * index + 2;
        let smallest = null;
        let leftChild,rightChild;
            if(leftChildIdx < length)
            {
                leftChild = array[leftChildIdx];
                if(leftChild < current)
                {
                    smallest = leftChildIdx;
                }  
            }
            if(rightChildIdx < length)
            {
                rightChild = array[rightChildIdx];
                if((rightChild < current) && (smallest == null) || (smallest != null) && (rightChild < leftChild))
                {
                    smallest = rightChildIdx;
                }
            }
            if(smallest === null)break;
            array[index] = array[smallest];
            array[smallest] = current;
            index = smallest;
        }
        
    }
    peek()
    {
        return this.heap[0];
    }
    extractMax()
    {
        const maximumValue = this.heap[0];
        const last = this.heap.pop();
        if(this.heap.length > 0)
        {
            this.heap[0] = last;
            this.bubbleDown(this.heap,0);
        }
        return maximumValue;
    }
    insert(value)
    {
        this.heap.push(value);
        this.bubbleUp();
        return this;
    }
    bubbleUp()
    {
        let idx = this.heap.length - 1;
        const value = this.heap[idx];
        while(idx > 0)
        {
            let parent = Math.floor((idx-1)/2);
            let parentVal = this.heap[parent];
            if(value >= parentVal)break;
            this.heap[parent] = value;
            this.heap[idx] = parentVal;
            idx = parent;
        }
    }
    
    
}
