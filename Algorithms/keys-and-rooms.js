var canVisitAllRooms = function(rooms) {
    let seen = new Array(rooms.length).fill(false);
    

    let graph = getGraph(rooms);
    let visited = new Set();
    seen[0] = true;
    for (let item in graph)
    {
        dfs(item,graph,visited,seen);
    }
   for (let val of seen)
   {
       if(val == false) return false;
   }
   return true;
};

const getGraph = (rooms,graph={}) => 
{
    for (let i = 0; i < rooms.length; i++)
    {
        for (let j = 0; j < rooms[i].length;j++)
        {
            if(!(graph[i])) graph[i] = [];

            graph[i].push(rooms[i][j])
        }
    }
    return graph
}
const dfs = (src,graph,visited,seen) => 
{
    let stack = [];
    stack[0] = src;

        while(stack.length > 0)
        {
            let current = stack.pop();
            if(visited.has(current)) continue;

            visited.add(current);
            if(Number(current) !== Number(src) )
            {
                seen[Number(current)] = true;
            }
            if(graph[current])
            {
            for (let item of graph[current])
            {
    
                stack.push(item)
            }
            }

        }

}
