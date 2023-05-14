class Node {
    constructor(value, priority) {
        this.value = value;
        this.priority = priority;
    }
}
class priorityQueue {
    constructor() {
        this.priorityQueue = []
    }
    build(array) {
        let length = array.length;
        let lastParent = Math.floor(length / 2) - 1;
        for (let i = lastParent; i >= 0; i--) {
            this.bubbleDown(array, i);
        }
        this.priorityQueue = array;
        return this;
    }
    enqeue(val, priority) {
        let node = new Node(val, priority);
        this.priorityQueue.push(node);
        this.bubbleUp();
        return this;
    }
    dequeue() {
        const min = this.priorityQueue[0];
        const last = this.priorityQueue.pop();
        if (this.priorityQueue.length > 0) {
            this.priorityQueue[0] = last;
            this.bubbleDown(this.priorityQueue,0);
        }
        return min;
    }
    bubbleDown(arr, idx) {
        if (!arr) {
            let arr = this.priorityQueue;
        };
        let val = arr[idx];


        while (true) {
            let leftChild = 2 * idx + 1;
            let rightChild = 2 * idx + 2;
            let smallest = null;
            let left, right;

            if (leftChild < arr.length) {
                left = arr[leftChild];

                if (left.priority < val.priority) {
                    smallest = leftChild;

                }
            }
            if (rightChild < arr.length) {
                right = arr[rightChild];
                if ((smallest == null && right.priority < val.priority) || (smallest != null && right.priority < left.priority)) {
                    smallest = rightChild;
                }
            }
            if (smallest == null)break;
            [arr[idx], arr[smallest]] = [arr[smallest], arr[idx]];
            idx = smallest;

        }
    }
    bubbleUp() {
        let idx = this.priorityQueue.length - 1;
        let element = this.priorityQueue[idx];

        while (idx > 0) {

            let parent = Math.floor((idx - 1) / 2);
            let parentVal = this.priorityQueue[parent];
            if (parentVal.priority <= element.priority) break;

            [this.priorityQueue[idx], this.priorityQueue[parent]] = [this.priorityQueue[parent], this.priorityQueue[idx]];
            idx = parent;
        }
    }
    peek() {
        return this.priorityQueue[0];
    }
}
let queue = new priorityQueue();
/**usage
queue.enqueue([10,120],100) //arguments -> (value,priority)
or
queue.build([{value:[10,100],priority:2},{value:[100,100],priority:5}])
**/
