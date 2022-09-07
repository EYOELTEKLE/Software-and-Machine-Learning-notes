/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    
    let visited = new Set();
    let count = 0;
    for (let r = 0; r < grid.length; r++)
    {
        for (let c = 0; c < grid[0].length; c++)
        {
            
            const ans = explore(grid,r,c,visited);      
            if (count == 0 || count < ans) count =ans;
        }
    }
return count;
};
const explore = (grid,r,c,visited) => 
{
    let U = 0 <=r && r < grid.length;
    let L = 0 <= c && c < grid[0].length;
    let position = r+','+c;
    if (!U || !L) return 1;
    let perimeter = 0;
    if (visited.has(position)) return 0;
    if (grid[r][c] == 0) return 1;

    visited.add(position)
   
   perimeter+=explore(grid,r - 1,c,visited)
   perimeter+=explore(grid,r + 1,c,visited)
   perimeter+=explore(grid,r,c - 1,visited)
   perimeter+=explore(grid,r,c+1,visited)
   return perimeter;
}
