const topologicalSorting = (graph) => 
{
    const indegree = getIndegree(graph);
    const no_edges = [];
    for (let item in indegree)
    {
    
        if(indegree[item] == 0 )
        {
           
            no_edges.push(Number(item))
        }
    }
    const topological_ordering = [];
   
    console.log(indegree);
    while(no_edges.length > 0)
    {
        let current = no_edges.pop();
        topological_ordering.push(current);

        for (let neighbour of graph[current])
        {
            
            
            indegree[neighbour] -= 1;

            if(indegree[neighbour] == 0)
            {
                no_edges.push(neighbour)
            }
        }
    }
    console.log(topological_ordering)
    
    if(topological_ordering.length == Object.keys(graph).length)return true;

    return false;
    
}

const getIndegree = (graph) => 
{
    let indegree = {};

    for (let item in graph)indegree[item] = 0;
     for (let item in graph)
     {
         for (let children of graph[item])
         {
             indegree[children] +=  1
         }
     }
    return indegree;
}
let graph = 
{
    0:[1]
}

topologicalSorting(graph)
