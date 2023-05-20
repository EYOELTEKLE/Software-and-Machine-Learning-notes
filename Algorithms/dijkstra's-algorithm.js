class Node {
    constructor(value, priority) {
        this.value = value;
        this.priority = priority;
    }
}
class priorityQueue {
    constructor() {
        this.priorityQueue = [];
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
     heapify() {
        let length = this.priorityQueue.length;
        let lastParent = Math.floor(length / 2) - 1;
        for (let i = lastParent; i >= 0; i--) {
            this.bubbleDown(this.priorityQueue, i);
        }
        
    }
    enqeue(val, priority) {
        
        let node = new Node(val, priority);
        
        this.priorityQueue.push(node);
        
        this.bubbleUp();
        
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
    update(node,cost)
    {
        for (let i = 0 ; i < this.priorityQueue.length; i++)
        {
            let {value,priority} = this.priorityQueue[i];
            if(value === node)
            {
                this.priorityQueue[i].priority = cost;
                
            }
        }
        this.heapify();
    }
    peek() {
        return this.priorityQueue[0];
    }
}
const dijkstra = (graph,start) => 
{

   let cost = {};     //initialize cost object - Nodes as a key and cost as a value
   for (let item in graph)
   {
       cost[item] = Infinity;    // fill the cost values with Infinity

       
   }
    cost[start] = 0; //set the starting node's distance as zero
    let queue = new priorityQueue(); //initialize a priority queue
    let visited = new Set();  // create a visited set to detect cycle
    for (let node in cost)    //iterate over the cost object and queue the node and its quivalent cost
    {
      
        queue.enqeue(node,cost[node])

    }
   
   while (queue.priorityQueue.length > 0)  //till the queue is empty traverse the graph
   {
          let item = queue.dequeue();  //dequeue the min element
      
          let [shortest_node,shortest_distance] = [item.value,item.priority]; //get the shortest_node and shortest_distance

           visited.add(shortest_node);   //add this node to visited set

           
           for (let children of graph[shortest_node]) //iterate over its neighbour node and calculate the distance
           {
               
            
              let [node,distance] = children; //destructure the child node and its distance
              
                
               if(visited.has(node))continue;  //check if the child node has been visited;
               
              if(cost[shortest_node] + distance < cost[node]) //compare cost of current shortest node + distance of current neightbour distance against the cost of the neighbour
                  //if so update the cost
              {
                  
                  cost[node] = cost[shortest_node] + distance;
                  
                  queue.update(node,cost[node]); //update the heap with the latest value
              }
           }
    }

    
    return cost;
}

let graph = 
{
	0:[[1,7]],
	1:[[2,6],[3,20],[4,3]],
	2:[[3,14]],
	3:[[4,2]],
	4:[],
	5:[]
}

dijkstra(graph,0);

/** - Test Code for this site - https://www.interviewcake.com/concept/swift/dijkstras-algorithm

class Node {
    constructor(value, priority) {
        this.value = value;
        this.priority = priority;
    }
}
class priorityQueue {
    constructor() {
        this.priorityQueue = [];
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
     heapify() {
        let length = this.priorityQueue.length;
        let lastParent = Math.floor(length / 2) - 1;
        for (let i = lastParent; i >= 0; i--) {
            this.bubbleDown(this.priorityQueue, i);
        }
        
    }
    enqeue(val, priority) {
        
        let node = new Node(val, priority);
        
        this.priorityQueue.push(node);
        
        this.bubbleUp();
        
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
    update(node,cost)
    {
        for (let i = 0 ; i < this.priorityQueue.length; i++)
        {
            let {value,priority} = this.priorityQueue[i];
            if(value === node)
            {
                this.priorityQueue[i].priority = cost;
                
            }
        }
        this.heapify();
    }
    peek() {
        return this.priorityQueue[0];
    }
}
const dijkstra = (graph,start) => 
{

   let cost = {};     //initialize cost object - Nodes as a key and cost as a value
   for (let item in graph)
   {
       cost[item] = Infinity;    // fill the cost values with Infinity

       
   }
    cost[start] = 0; //set the starting node's distance as zero
    let queue = new priorityQueue(); //initialize a priority queue
    let visited = new Set();  // create a visited set to detect cycle
    for (let node in cost)    //iterate over the cost object and queue the node and its quivalent cost
    {
      
        queue.enqeue(node,cost[node])

    }
   
   while (queue.priorityQueue.length > 0)  //till the queue is empty traverse the graph
   {
          let item = queue.dequeue();  //dequeue the min element
      
          let [shortest_node,shortest_distance] = [item.value,item.priority]; //get the shortest_node and shortest_distance

           visited.add(shortest_node);   //add this node to visited set

           
           for (let children of graph[shortest_node]) //iterate over its neighbour node and calculate the distance
           {
               
            
              let [node,distance] = children; //destructure the child node and its distance
              
                
               if(visited.has(node))continue;  //check if the child node has been visited;
               
              if(cost[shortest_node] + distance < cost[node]) //compare cost of current shortest node + distance of current neightbour distance against the cost of the neighbour
                  //if so update the cost
              {
                  
                  cost[node] = cost[shortest_node] + distance;
                  
                  queue.update(node,cost[node]); //update the heap with the latest value
              }
           }
    }

    
    return cost;
}

let graph = 
{
	Memphis:[["Nashville",15],["Atlanta",10],["Mobile",7],["New orleans",3]],
    'New orleans':[["Memphis",3],["Mobile",3]],
    Mobile:[["New orleans",3],["Memphis",7],["Savannah",6],["Atlanta",2]],
    Savannah:[["Atlanta",1],["Mobile",6]],
    Atlanta:[["Memphis",10],["Mobile",2],["Savannah",1],["Nashville",2]],
    Nashville:[["Memphis",15],["Atlanta",2]]
}

dijkstra(graph,"Memphis");


**/
