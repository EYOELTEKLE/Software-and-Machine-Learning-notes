const graph = 
{
1:[2,3,4],
2:[1,3],
3:[1,2,5,6],
4:[1,5],
5:[3,4],
6:[3],
7:[8,9],
8:[7],
9:[7],
10:[11,12],
11:[10],
12:[10],
    
}
const connectedComponents = (graph) => 
{
    let visited = new Set();
    let count = 0
    for (let path in graph)
    {
        
        if(!(visited.has(path)))
        {
            let ans =  explore(graph,path,visited);
            if (ans)
            {
                count++
            }
        }
    }
    return count;
}

const explore = (graph,path,visited) => 
{
    let queue = [];
    
    queue.push(path);
    
    while(queue.length > 0)
    {
        let temp = queue.pop();
        if (visited.has(String(temp)))
        {
            continue;
        }
        visited.add(String(temp));
        for (let item of graph[temp])
        {
            queue.push(item);
        }
    }
return true
}
connectedComponents(graph)
