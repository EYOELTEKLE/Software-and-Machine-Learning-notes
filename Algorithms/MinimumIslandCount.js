const minimumIsland = (grid) => {
  const visited = new Set();
    let min = 0;

    for (let r = 0; r < grid.length; r++)
    {
        for (c = 0; c < grid[0].length; c++)
        {
            const ans = explore(grid,r,c,visited);
         
            if (ans != 0) 
            {
                if (min == 0 || min > ans) min = ans;
            }
        }
    }
    return min;
};
const explore = (grid,r,c,visited) => 
{
    let rI = 0 <= r && r < grid.length;
    let cI = 0 <= c && c < grid[0].length;
    let position = r + ',' + c;

    if (!rI || !cI) return 0;
    if (visited.has(position)) return 0;
    if (grid[r][c] == "W") return 0;
    visited.add(position);
    let size = 1;
   size+= explore(grid,r - 1, c,visited);
   size += explore(grid,r + 1, c,visited);
   size += explore(grid,r , c + 1,visited);
    size += explore(grid,r, c - 1,visited);
    return size;
}
