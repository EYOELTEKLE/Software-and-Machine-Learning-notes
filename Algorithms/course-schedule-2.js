var findOrder = function(numCourses, prerequisites) {

    
    if(prerequisites.length == 0)
    {
        let temp = []
        for(let i = numCourses-1; i >= 0; i--)
        {
            temp.push(i)
        }
        return temp
    }
    const {indegree,graph} = getHelper(prerequisites,numCourses);
    
    const no_edges = [];
    

    for (let item in indegree)
    {
        if(indegree[item] == 0)no_edges.push(Number(item));
    }
    
    
    const topological_sort = [];
    while(no_edges.length > 0)
    {
        let current = no_edges.pop();
        topological_sort.push(current);

        
        for (let neighbour of graph[current])
        {
           
            indegree[neighbour] -= 1;
            if(indegree[neighbour] == 0)
            {
                no_edges.push(neighbour)
            }
            
        }
    }
    if(topological_sort.length == 0) return [];
    return Object.keys(graph).length == topological_sort.length ? topological_sort : [];
    
};

const getHelper = (edges,numCourses) => 
{
    let graph = {};
    let indegree = {};

    for (let item of edges)
    {
        const [take,pre] = item;
        if(!(pre in graph))graph[pre] = [];
        graph[pre].push(take)
    }

    for (let i = 0; i < numCourses; i++)
    {
        if(!(i in graph))graph[i] = []
    }
    for (let item in graph)
    {
        indegree[item] = 0;
    }
    for (let item in graph)
    {
        for (child of graph[item])
        {
            if(!(indegree[child]))
            {
                indegree[child] = 0
            }
        
            indegree[child] += 1 
        
        }
    }

    for (let item of edges)
    {
        const [val1,val2] = item;

        if(!(val1 in graph))graph[val1] = [];
        if(!(val2 in graph))graph[val2] = [];
    }
     
   
    return {indegree,graph};
}
