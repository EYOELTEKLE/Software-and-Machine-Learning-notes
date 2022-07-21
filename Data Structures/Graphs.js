
﻿
class Graph
{
    constructor()
    {
        this.NodeLength = 0;
        this.adjancencyList = {}
    }
    addNode(value)
    {
      this.NodeLength++;
      this.adjancencyList[value] = []
    }
    addEdge(value1,value2)
    {
        this.adjancencyList[value1].push(value2);
        return this.adjancencyList;
    }
    DFS(source)
    {
        let stack = [source];
        let list = [];
        while(stack.length > 0)
        {
            let current = stack.pop();
            list.push(current);
            let adjacent = this.adjancencyList[current]
            for (let neighbour of adjacent)
            {
                stack.push(neighbour)
            }
        }
        return list;;
    }
}
