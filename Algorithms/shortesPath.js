const shortestPath = (edges, nodeA, nodeB) =>
 {
  
    let depth = 0;
     let queue = [[nodeA,depth]];
      const obj = graph(edges);
    let visited = new Set();
    let min = null;
    while(queue.length > 0)
    {
        
         let [current,depth] = queue.shift();
         if (visited.has(current))
         {
             continue;
         };
         visited.add(current);
         if (current == nodeB)
         {
            return depth
         }
       
         for (let item of obj[current])
         {
             queue.push([item,depth+ 1])
         }
        ;
        
    }
   return min == null ? -1 :min; 
};
const graph = (edges) => 
{
 const graph = {};

  for (let item of edges)
  {
    if(!(item[0] in graph)) graph[item[0]] = [];
    if(!(item[1] in graph)) graph[item[1]] = [];
    graph[item[0]].push(item[1])
    graph[item[1]].push(item[0])
  } 
return graph;
}


//other form;


   const obj = 
{
    a:['b','f'],
    b:['a','c'],
    c:['b','d','f','t'],
    d:['c','e'],
    e:['d','f'],
    f:['a','c','e'],
    t:['c']
}

const shortestPath = (obj,src,dest) =>{
let depth = 0;
     let queue = [[src,depth]];
    let visited = new Set();
    let min = null;
    while(queue.length > 0)
    {

         let [current,depth] = queue.shift();
         if (visited.has(current))
         {
             continue;
         };
         visited.add(current);
         if (current == dest)
         {
            return depth
         }

         for (let item of obj[current])
         {
             queue.push([item,depth+ 1])
         }
        ;

    }
   return min == null ? -1 :min; }
