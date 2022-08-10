const gp = [['i','j'],['k','i'],['m','k'],['k','l'],['o','n']]
const undirectedGraph = (graph, source,destination) =>
{
    const result = convertToAdjancency(graph);
    return hasPath(result, source, destination);
}

const convertToAdjancency = (list) => 
{
    let obj = {};
    for (let item of list)
    {
        const [a,b] = item;
        
        if (!(a in obj)) {obj[a] = []};
        if (!(b in obj)) {obj[b] = []};
        obj[a].push(b);
        obj[b].push(a)
    }
    return obj;
}
const hasPath = (result,source,destination) => 
{
    let queue = [];
    const visited = new Set();
    queue.push(source);
    while (queue.length > 0)
    {
        let temp = queue.pop();
        if (temp == destination)
        {
            return true
        }
        if (!(visited.has(temp)) == false)
        {
            continue;
        }
        visited.add(temp)
        for (let item of result[temp])
        {
            queue.push(item);
        }
        
    }
    return false
}
undirectedGraph(gp,'j','m')
