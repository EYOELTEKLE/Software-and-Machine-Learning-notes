const graph = 
{
    0:[1,5,8],
    1:[0],
    2:[4,3],
    3:[4,2],
    4:[2,3],
    5:[0,8],
    8:[0,5]
    
    
    
}
const largestComponent = (graph) => 
{
    let visited = new Set();
    let count = 0;
    let max = 0;
    for (let path in graph)
    {
        
        if(!(visited.has(path)))
        {
            let ans =  explore(graph,path,visited);
            if (ans > max)
            {
                max = ans;
            }
        }
    }
    return max;
}

const explore = (graph,path,visited) => 
{
    let queue = [];
    
    queue.push(path);
    let max = 0;
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
    max++;
    }
return max
}
largestComponent(graph)
